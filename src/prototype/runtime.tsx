// A small React host for Claude Design logic classes. It mirrors dc-runtime
// (design/support.js — StreamableLogic + StreamableComponent) so the iCASH logic
// runs unchanged: setState merges synchronously into the logic's state, the view
// renders against { ...props, ...renderVals() }, and lifecycle hooks fire in the
// same order as in the prototype.
import { Component, Fragment, isValidElement, type ReactNode } from 'react';

type State = Record<string, any>;
type Update = State | ((prev: State) => State);

export class DCLogic {
  props: State;
  state: State = {};
  __host?: DCHost;

  constructor(props?: State) {
    this.props = props || {};
  }

  setState(update: Update, cb?: () => void) {
    this.__host?.__setLogicState(update, cb);
  }

  forceUpdate() {
    this.__host?.forceUpdate();
  }

  componentDidMount() {}
  componentDidUpdate(_prevProps?: State) {}
  componentWillUnmount() {}

  /** The flat object the view renders against (merged over props). */
  renderVals(): State {
    return {};
  }
}

type HostProps = {
  name: string;
  logic: new (props: State) => DCLogic;
  view: (vals: State) => ReactNode;
  [prop: string]: any;
};

const message = (e: unknown) => (e instanceof Error && e.message ? e.message : String(e));

export class DCHost extends Component<HostProps, { __v: number; __err: string | null }> {
  logic!: DCLogic;
  private ctorError: string | null = null;

  constructor(props: HostProps) {
    super(props);
    this.state = { __v: 0, __err: null };
    try {
      this.logic = new props.logic(this.userProps());
    } catch (e) {
      console.error(e);
      this.ctorError = props.name + ': ' + message(e);
      this.logic = new DCLogic(this.userProps());
    }
    this.logic.__host = this;
  }

  static getDerivedStateFromError(e: unknown) {
    return { __err: message(e) };
  }

  componentDidCatch(e: unknown, info: { componentStack?: string | null }) {
    console.error('[dc-runtime] render error in <' + this.props.name + '>:', e, info?.componentStack || '');
  }

  /** The props the logic and view see — host wiring stripped. */
  userProps(): State {
    const { name: _name, logic: _logic, view: _view, ...rest } = this.props;
    return rest;
  }

  __setLogicState(update: Update, cb?: () => void) {
    const prev = this.logic.state;
    const patch = typeof update === 'function' ? update(prev) : update;
    this.logic.state = { ...prev, ...patch };
    this.setState((s) => ({ __v: s.__v + 1 }), cb);
  }

  componentDidMount() {
    try {
      this.logic.componentDidMount();
    } catch (e) {
      console.error(e);
    }
  }

  componentDidUpdate(prevProps: HostProps) {
    this.logic.props = this.userProps();
    try {
      this.logic.componentDidUpdate(prevProps);
    } catch (e) {
      console.error(e);
    }
  }

  componentWillUnmount() {
    try {
      this.logic.componentWillUnmount();
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { name, view } = this.props;
    if (this.state.__err) {
      return (
        <div className="sc-host sc-has-error" data-sc-name={name}>
          <div className="sc-logic-error">{name + ': ' + this.state.__err}</div>
        </div>
      );
    }
    const userProps = this.userProps();
    this.logic.props = userProps;
    let vals = userProps;
    let renderErr = this.ctorError;
    try {
      vals = { ...userProps, ...(this.logic.renderVals() || {}) };
    } catch (e) {
      console.error(e);
      renderErr = name + '.renderVals(): ' + message(e);
    }
    return (
      <div className={'sc-host' + (renderErr ? ' sc-has-error' : '')} data-sc-name={name}>
        {renderErr && <div className="sc-logic-error">{renderErr}</div>}
        {view(vals)}
      </div>
    );
  }
}

// ---- helpers used by the generated view (src/prototype/view.jsx) ----

/** A `{{ value }}` inside an attribute or style string. */
export function $s(value: unknown): string {
  return value == null ? '' : String(value);
}

/** A `{{ value }}` in text content — rendered the way dc-runtime does. */
export function $t(value: unknown): ReactNode {
  if (value === undefined || value === null || typeof value === 'boolean') return null;
  if (isValidElement(value) || Array.isArray(value)) return <Fragment>{value}</Fragment>;
  return <span className="sc-interp">{String(value)}</span>;
}

/** `<sc-for list="{{ list }}" as="item">` — a keyed list; non-arrays render nothing. */
export function $each<T>(list: T[] | unknown, render: (item: T, index: number) => ReactNode): ReactNode[] {
  if (!Array.isArray(list)) return [];
  return list.map((item, i) => <Fragment key={i}>{render(item, i)}</Fragment>);
}
