// iCASH App logic — the <script data-dc-script> block of design/iCASH App.dc.html,
// carried over verbatim. Only this header and the export at the bottom were added.
import { DCLogic } from './runtime';

const AR = {
  'Linked cards': 'البطاقات المرتبطة', 'PAYING FROM': 'الدفع من', 'SOURCES': 'المصادر',
  'Top up wallet': 'تعبئة المحفظة', 'Add a card': 'إضافة بطاقة', 'iCASH balance': 'رصيد آي كاش',
  'Which card do you want to link?': 'أي بطاقة تريد ربطها؟',
  'Top-up fees are set by the provider and shown before every top-up.': 'رسوم التعبئة يحددها المزوّد وتظهر قبل كل عملية.',
  'Enter the 16 digits on the front, then the expiry date.': 'أدخل الأرقام الـ16 على الوجه، ثم تاريخ الانتهاء.',
  'Enter the code': 'أدخل الرمز', 'Resend the code': 'إعادة إرسال الرمز', 'Verifying your card': 'جارٍ التحقق من بطاقتك',
  'Card details': 'تفاصيل البطاقة', 'Confirm it is you': 'أكّد هويتك', 'Verifying': 'جارٍ التحقق',
  'Card linked': 'تم ربط البطاقة', 'Continue': 'متابعة', 'Confirm': 'تأكيد',
  'Make it my paying card': 'اجعلها بطاقة الدفع', 'Keep paying from my wallet': 'الاستمرار بالدفع من محفظتي',
  'Top-up fee': 'رسوم التعبئة', 'Top-up limit': 'حد التعبئة', 'EXPIRES': 'تنتهي', 'CARDHOLDER': 'حامل البطاقة',
  'A new code is on its way': 'تم إرسال رمز جديد',
  'You can top up your wallet from it, or make it the source your iCASH card pays from.': 'يمكنك تعبئة محفظتك منها، أو جعلها المصدر الذي تدفع منه بطاقة آي كاش.',
  'Linked cards stay with their own provider. iCASH only moves money when you top up or pay with your iCASH card.': 'تبقى البطاقات المرتبطة عند مزوّديها. لا ينقل آي كاش الأموال إلا عند التعبئة أو الدفع ببطاقة آي كاش.',
  'Qi Card': 'كي كارد', 'Zain Cash': 'زين كاش', 'Asiacell Pay': 'آسياسيل باي', 'FastPay': 'فاست باي',
  'Bank Visa': 'فيزا مصرفية', 'Nass Wallet': 'محفظة ناس', 'No top-up fee': 'بدون رسوم تعبئة',
  'Link Qi Card, Zain Cash and more': 'اربط كي كارد وزين كاش وغيرها',
  'The whole app changes, including the layout direction.': 'يتغيّر التطبيق بالكامل، بما في ذلك اتجاه التخطيط.',
  'Left to right': 'من اليسار إلى اليمين', 'From another iCASH wallet': 'من محفظة آي كاش أخرى',
  'Ask anyone to send to your phone number or @tag': 'اطلب من أي شخص الإرسال إلى رقم هاتفك أو معرّفك',
  'To a wallet number': 'إلى رقم محفظة', 'iCASH account number · instant': 'رقم حساب آي كاش · فوري',
  'Debit or credit card, cash at any iCASH agent, or a transfer from another iCASH wallet. All of them arrive instantly.': 'بطاقة خصم أو ائتمان، أو نقداً عند أي وكيل آي كاش، أو تحويل من محفظة آي كاش أخرى. جميعها تصل فوراً.',
  'Instantly to any iCASH wallet, day or night, whether you send to a phone number or a wallet number.': 'فوراً إلى أي محفظة آي كاش في أي وقت، سواء أرسلت إلى رقم هاتف أو رقم محفظة.',
  'Iraq Mall': 'عراق مول', 'From Saad Kareem': 'من سعد كريم', 'From Hayder': 'من حيدر',
  'Latest transactions': 'أحدث الحركات', 'Pending': 'قيد المعالجة', 'Completed': 'مكتملة',
  'Daylight': 'النهار', 'Help and support': 'المساعدة والدعم',
  'Set a target for card and wallet spending. iCASH warns you before you reach it.': 'حدّد هدفاً لإنفاق البطاقة والمحفظة. ينبّهك آي كاش قبل الوصول إليه.',
  'Target': 'الهدف', 'IQD a month': 'دينار شهرياً', 'Warn me at': 'نبّهني عند', 'Save budget': 'حفظ الميزانية',
  'Set this budget': 'تعيين هذه الميزانية', 'Remove budget': 'إزالة الميزانية', 'Your budget': 'ميزانيتك',
  'Target, alerts and pace': 'الهدف والتنبيهات ووتيرة الإنفاق', 'YOUR MONEY': 'أموالك', 'BUDGET': 'الميزانية',
  'FROM 360': 'من 360', 'No budget yet · tap to set one': 'لا توجد ميزانية · اضغط لتعيينها',
  'No budget is active. Save to switch it on.': 'لا توجد ميزانية مفعّلة. اضغط حفظ لتشغيلها.',
  'Off': 'معطّلة', 'Tap to set a target': 'اضغط لتحديد هدف', 'No budget set': 'لا توجد ميزانية',
  'Global data in minutes': 'بيانات عالمية في دقائق', 'included this month': 'مشمولة هذا الشهر',
  'cashback on stays': 'استرداد على الإقامات', 'of 4 this month': 'من 4 هذا الشهر',
  'Stays in Iraq and abroad': 'إقامات في العراق وخارجه', 'Ready to use': 'جاهزة للاستخدام',
  'Help and support': 'المساعدة والدعم', 'FAQ': 'الأسئلة الشائعة', 'CONTACT US': 'اتصل بنا',
  'Common questions first. If you still need us, we answer 24 hours a day.': 'الأسئلة الشائعة أولاً. وإن احتجت إلينا، نجيب على مدار 24 ساعة.',
  'Call us': 'اتصل بنا', 'Chat on WhatsApp': 'محادثة على واتساب',
  '+964 780 000 1234 · free from Iraq': '+964 780 000 1234 · مجاناً من داخل العراق',
  '+964 780 000 1234 · replies in minutes': '+964 780 000 1234 · نرد خلال دقائق',
  'How do I add money?': 'كيف أضيف رصيداً؟',
  'Bank transfer, debit card, or cash at any iCASH agent. Card and agent top-ups arrive instantly; bank transfers land the same day.': 'حوالة مصرفية أو بطاقة خصم أو نقداً عند أي وكيل آي كاش. تصل تعبئة البطاقة والوكيل فوراً، والحوالات المصرفية في نفس اليوم.',
  'How long does a transfer take?': 'كم يستغرق التحويل؟',
  'Instantly to another iCASH user, day or night. A local bank transfer arrives the same working day.': 'فوراً إلى مستخدم آي كاش آخر في أي وقت. والحوالة المصرفية المحلية تصل في نفس يوم العمل.',
  'What does a stock order cost?': 'كم تكلفة أمر الأسهم؟',
  'A 0,85% service fee with a 2.500 IQD minimum, plus the 0,15% ISX levy. The full total is shown before you confirm.': 'رسوم خدمة 0,85% بحد أدنى 2.500 دينار، مع رسم سوق العراق 0,15%. يظهر المبلغ الإجمالي قبل التأكيد.',
  'I lost my phone. Is my card safe?': 'فقدت هاتفي، هل بطاقتي آمنة؟',
  'Freeze the card from Cards straight away, then order a replacement. Your balance stays in your account.': 'جمّد البطاقة من صفحة البطاقات فوراً، ثم اطلب بديلة. يبقى رصيدك في حسابك.',
  'How do I switch the app to Arabic?': 'كيف أحوّل التطبيق إلى العربية؟',
  'Profile, then Language. The whole app changes, including the right-to-left layout.': 'الملف الشخصي ثم اللغة. يتغيّر التطبيق بالكامل، بما في ذلك التخطيط من اليمين إلى اليسار.',
  'Recent': 'الأخيرة', 'Arriving': 'الوصول', 'Ultra': 'ألترا', '✦ Get more from': '✦ احصل على المزيد من',
  '0 / 2.000.000 IQD withdrawn': '0 / 2.000.000 دينار مسحوبة', 'Careem Plus': 'كريم بلس', 'TCL Care': 'TCL كير',
  'Ticket discounts, upgrades and lounge access with iCASH points': 'خصومات تذاكر وترقيات ودخول صالات بنقاط آي كاش',
  'Iraqi Airways Club': 'نادي الخطوط العراقية', 'Middle East Airlines': 'طيران الشرق الأوسط',
  'Royal Jordanian': 'الملكية الأردنية', 'Air Arabia': 'العربية للطيران', 'Pegasus Airlines': 'طيران بيغاسوس',
  'Baghdad (BGW)': 'بغداد (BGW)', 'Istanbul (IST)': 'إستانبول (IST)', 'Collected all time': 'المحصّل منذ البداية',
  'Omar': 'عمر', 'Hala': 'هالة', 'PS, Xbox, Steam': 'بلايستيشن، إكس بوكس، ستيم',
  '. Settlement to your iCASH account runs daily at 23:00 Baghdad.': '. تُجرى التسوية إلى حساب آي كاش يومياً الساعة 23:00 بتوقيت بغداد.',
  'Get started': 'ابدأ', 'New payment': 'دفعة جديدة', 'Name, phone or account number': 'الاسم أو الهاتف أو رقم الحساب',
  'Recent': 'الأخيرة', 'Asiacell top-up': 'تعبئة آسياسيل', 'No-fee international transfers': 'حوالات دولية بدون رسوم',
  'Send money worldwide, right away, with no hidden charges. Every conversion runs at the interbank rate.': 'أرسل الأموال إلى العالم فوراً وبدون رسوم خفية. كل تحويل بسعر ما بين المصارف.',
  '1 point / 2.000 IQD spent': 'نقطة واحدة لكل 2.000 دينار تُنفق',
  'Enter at least 12 digits of the iCASH or bank account number.': 'أدخل 12 رقماً على الأقل من رقم حساب آي كاش أو المصرف.',
  'Any Iraqi mobile registered with iCASH. Arrives instantly.': 'أي رقم عراقي مسجّل في آي كاش. يصل فوراً.',
  'Scan to pay': 'امسح للدفع', 'Show my QR instead': 'اعرض رمزي بدلاً من ذلك', 'Cancel': 'إلغاء',
  'Show this code at any iCASH agent, kiosk or exchange office. The amount lands in your card account instantly.': 'اعرض هذا الرمز في أي وكيل أو كشك أو صرافة آي كاش. يُضاف المبلغ إلى حساب بطاقتك فوراً.',
  'Exchange IQD, USD, EUR and more': 'بدّل الدينار والدولار واليورو وغيرها',
  'Download a PDF or CSV': 'نزّل ملف PDF أو CSV', 'Rent, bills and instalments': 'الإيجار والفواتير والأقساط',
  'Points, cashback and offers': 'النقاط والاسترداد والعروض', 'Theme': 'المظهر', 'Midnight': 'منتصف الليل',
  'Signal blue': 'أزرق سيغنال', 'Tigris': 'دجلة', 'Amber souk': 'سوق العنبر', 'Violet dusk': 'غروب بنفسجي',
  'Date grove': 'بستان النخيل', 'Expiry date': 'تاريخ الانتهاء', 'Card account': 'حساب البطاقة',
  'Savings account': 'حساب التوفير', 'All accounts': 'كل الحسابات', '2 accounts · IQD': 'حسابان · دينار',
  'Find the closest agent': 'ابحث عن أقرب وكيل', 'Nearest:': 'الأقرب:', 'Balance:': 'الرصيد:',
  'Rafidain Bank': 'مصرف الرافدين', 'Al Rasheed Bank': 'مصرف الرشيد', 'Bank of Baghdad · IQD': 'مصرف بغداد · دينار',
  'Rafidain Bank · IQD': 'مصرف الرافدين · دينار', 'Arriving': 'الوصول', 'Usually instantly': 'فوري عادةً',
  'Add money securely': 'أضف الرصيد بأمان', 'How to add money': 'طرق إضافة الرصيد', 'Add money in': 'أضف الرصيد بـ',
  'Methods': 'الطرق', 'Debit or credit card': 'بطاقة خصم أو ائتمان', 'Usually arrives instantly': 'يصل فوراً عادةً',
  'Easy bank transfer': 'حوالة مصرفية سهلة',
  'Transfer from your bank without entering your details': 'حوّل من مصرفك دون إدخال بياناتك',
  'Regular bank transfer': 'حوالة مصرفية اعتيادية',
  'Send from any Iraqi bank using your iCASH account details': 'أرسل من أي مصرف عراقي باستخدام تفاصيل حساب آي كاش',
  'Cash at an iCASH agent': 'نقداً عند وكيل آي كاش',
  'Deposit cash at any partner agent across Iraq': 'أودع النقد عند أي وكيل شريك في العراق',
  'Show your QR at an agent, kiosk or exchange office': 'اعرض رمزك عند وكيل أو كشك أو صرافة',
  'Free, forever': 'مجاني للأبد', 'Renews on 10 December': 'يتجدد في 10 كانون الأول',
  'Upgrade plan': 'ترقية الخطة', '2 months free': 'شهران مجاناً', '3 months discount': 'خصم 3 أشهر',
  'Your current plan': 'خطتك الحالية', 'View plan benefits': 'اطّلع على مزايا الخطة',
  'Earn 50.000 IQD or more': 'اكسب 50.000 دينار أو أكثر', 'Your position': 'مركزك',
  'Prices are indicative ISX closing data. Trading is not live in this prototype.': 'الأسعار إرشادية من إقفال سوق العراق. التداول غير فعلي في هذا النموذج.',
  'Airline miles': 'أميال الطيران', 'Your airlines': 'شركاتك', 'All airlines': 'كل الشركات',
  'Transfer rates are indicative. Miles arrive within 48 hours of a confirmed transfer.': 'أسعار التحويل إرشادية. تصل الأميال خلال 48 ساعة من تأكيد التحويل.',
  '1 adult': 'شخص واحد', 'Reset': 'إعادة تعيين', 'Converter': 'محوّل العملات',
  'Use the converter to compare current values': 'استخدم المحوّل لمقارنة القيم الحالية',
  'Iraqi Dinar': 'دينار عراقي', 'US Dollar': 'دولار أمريكي', 'Euro': 'يورو', 'British Pound': 'جنيه إسترليني',
  'base currency': 'العملة الأساسية', 'Entering': 'تُدخل', 'Tap a row to switch': 'اضغط صفاً للتبديل',
  'Sign in with your business number': 'سجّل الدخول برقم عملك', 'BUSINESS NUMBER': 'رقم العمل',
  'PASSWORD': 'كلمة المرور', 'Enter password': 'أدخل كلمة المرور', 'Exit': 'خروج',
  'Staff sign in with the same business number and their own password. Roles limit who can refund or see settlement.': 'يسجّل الموظفون بنفس رقم العمل وبكلمة مرور خاصة. تحدد الأدوار من يمكنه الاسترجاع أو رؤية التسوية.',
  'Sales': 'المبيعات', 'Signed in as': 'مسجّل الدخول كـ', 'Omar A. · Owner': 'عمر ع. · المالك',
  'Select a sale type': 'اختر نوع البيع', 'How would you like to get paid?': 'كيف تريد استلام الدفع؟',
  'Amount to charge': 'المبلغ المطلوب', 'Customer scans to pay': 'يمسح العميل للدفع',
  'Top-up agents': 'وكلاء التعبئة', 'Cash top-ups at shops near you, no fee': 'تعبئة نقدية في متاجر قريبة، بدون رسوم',
  'Karrada Market': 'سوق الكرادة', 'Karrada In, Baghdad · grocery': 'الكرادة داخل، بغداد · بقالة',
  'Jadriya · phone shop': 'الجادرية · متجر هواتف', 'Arasat al-Hindiya': 'عرصات الهندية',
  'Mansour · level 1': 'المنصور · الطابق الأول', 'Rasheed Street': 'شارع الرشيد',
  'Closed · opens 09:00': 'مغلق · يفتح 09:00', 'Baghdad, Iraq': 'بغداد، العراق', 'Baghdad': 'بغداد',
  'Erbil': 'أربيل', 'Basra': 'البصرة', 'Najaf': 'النجف', 'Karbala': 'كربلاء', 'Sulaymaniyah': 'السليمانية',
  'Jadriya, Baghdad': 'الجادرية، بغداد', 'Karrada, Baghdad': 'الكرادة، بغداد',
  'prices unlocked': 'أسعار مفتوحة',
  'You save 10% or more on selected stays, and earn points on every booking': 'توفّر 10% أو أكثر على إقامات مختارة، وتكسب نقاطاً مع كل حجز',
  'Zain Cash, Asiacell, Korek': 'زين كاش، آسياسيل، كورك', 'iCASH Miles': 'أميال آي كاش',
  'Gaming credit': 'رصيد الألعاب', 'Game credit and gift cards': 'رصيد ألعاب وبطاقات هدايا',
  '0% within your plan limits': '0% داخل حدود خطتك', 'Unlimited fee-free currency exchange': 'صرف عملات غير محدود بدون رسوم',
  'Brushed metal card, 1 free replacement': 'بطاقة معدنية مصنفرة، بديل مجاني واحد',
  'Convert points to Iraqi Airways miles': 'حوّل النقاط إلى أميال الخطوط العراقية',
  '3 GB of global data monthly included': '3 غيغابايت بيانات عالمية شهرياً',
  'Hayder Aboshanna': 'حيدر أبو شنة', 'Mohammed Mahmood': 'محمد محمود', 'Mustafa Albofaisal': 'مصطفى البوفيصل',
  'Zainab Al Saadi': 'زينب السعدي', 'Saad Kareem': 'سعد كريم', 'Noor Kadhim': 'نور كاظم',
  'Yousif Hassan': 'يوسف حسن', 'Rania Abbas': 'رانيا عباس', 'Hayder Nouri': 'حيدر نوري',
  'Zainab Hassan': 'زينب حسن', 'Ahmed Al Janahi': 'أحمد الجناحي', 'Karrada Coffee House': 'مقهى الكرادة',
  'Iraq Mall': 'عراق مول', 'Babylon Rotana': 'بابل روتانا', 'Cristal Grand Ishtar': 'كريستال غراند عشتار',
  'Divan Erbil': 'ديوان أربيل', 'Karbala Rayhaan by Rotana': 'كربلاء ريحان من روتانا',
  'Ready to change': 'مستعد لتغيير', 'the way you money?': 'طريقة تعاملك مع المال؟',
  'One account for spending, saving and investing in Iraq and abroad.': 'حساب واحد للإنفاق والتوفير والاستثمار في العراق وخارجه.',
  'Monthly spending limit': 'حد الإنفاق الشهري', 'Resets on 1 October · tap to change the limit': 'يتجدد في 1 تشرين الأول · اضغط لتغيير الحد',
  'Expenses card · resets on 1 October': 'بطاقة المصاريف · تتجدد في 1 تشرين الأول',
  'Online only · set a limit before first use': 'للإنترنت فقط · حدّد سقفاً قبل أول استخدام',
  'Ready to use': 'جاهزة للاستخدام', 'Midnight edition': 'إصدار منتصف الليل', 'Signal edition': 'إصدار سيغنال',
  'Tigris edition': 'إصدار دجلة', 'Midnight, 2026': 'منتصف الليل، 2026', 'Signal blue, 2026': 'أزرق سيغنال، 2026',
  'Tigris river, 2026': 'نهر دجلة، 2026', 'STANDARD': 'أساسية', 'PREMIUM': 'بريميوم', 'METAL': 'معدنية',
  'The everyday iCASH card, in deep navy.': 'بطاقة آي كاش اليومية باللون الكحلي الغامق.',
  'Brand blue, front and centre.': 'أزرق الهوية في المقدمة.',
  'Inspired by the river running through Baghdad.': 'مستوحاة من النهر الذي يعبر بغداد.',
  'Virtual card is free · physical delivery 3–5 days': 'البطاقة الرقمية مجانية · التسليم الفعلي 3–5 أيام',
  'To Ahmed': 'إلى أحمد', 'To Saad': 'إلى سعد', 'To Hayder': 'إلى حيدر', 'From Hayder': 'من حيدر',
  'Own a piece of Iraqi business': 'امتلك حصة في الشركات العراقية',
  'Banks, telecoms and industry listed on the Iraq Stock Exchange': 'مصارف واتصالات وصناعات مدرجة في سوق العراق للأوراق المالية',
  'Save on trading fees': 'وفّر في رسوم التداول',
  '0% commission within your plan limits. Other fees, e.g. FX, may apply': 'عمولة 0% داخل حدود خطتك. قد تُطبّق رسوم أخرى مثل صرف العملات',
  'Investing made simple': 'استثمار مبسّط',
  'From recurring buys to automated strategies, invest at your own pace': 'من الشراء المتكرر إلى الاستراتيجيات الآلية، استثمر على وتيرتك',
  'Sending money abroad?': 'ترسل أموالاً إلى الخارج؟',
  'Fast and low-fee international payments are available': 'حوالات دولية سريعة وبرسوم منخفضة',
  'Split a bill in seconds': 'اقسم الفاتورة في ثوانٍ',
  'Send a request to anyone in your contacts': 'أرسل طلباً إلى أي شخص في جهات اتصالك',
  'Get paid faster with Pro links': 'استلم أموالك أسرع مع روابط برو',
  'Create and send payment links in seconds, with iCASH Pro. T&Cs apply': 'أنشئ روابط دفع وأرسلها في ثوانٍ مع آي كاش برو. تُطبّق الشروط',
  'Add a widget': 'إضافة أداة', 'Pick the mini apps you want on your Home screen. Tap to add or remove.': 'اختر الأدوات التي تريدها في الشاشة الرئيسية. اضغط للإضافة أو الإزالة.',
  'Card and wallet spending': 'إنفاق البطاقة والمحفظة', 'Accounts, invest and vaults': 'الحسابات والاستثمار والخزائن',
  'Card spending by day': 'إنفاق البطاقة يومياً', 'Against your monthly budget': 'مقابل ميزانيتك الشهرية',
  'Earned on every payment': 'تُكتسب مع كل عملية دفع', 'Instalments in progress': 'أقساط جارية',
  'Round-ups on': 'التقريب مفعّل', 'standing order': 'أمر مستمر',
  'To an iCASH user': 'إلى مستخدم آي كاش', 'Local bank transfer': 'حوالة مصرفية محلية',
  'Between my accounts': 'بين حساباتي', 'Instant, free · phone or @tag': 'فوري ومجاني · هاتف أو معرّف',
  'IBAN · arrives same day': 'آيبان · يصل في نفس اليوم', 'Send a payment link': 'أرسل رابط دفع',
  'Insurance': 'التأمين', 'Covered for travel and purchases': 'تغطية للسفر والمشتريات',
  'Brushed metal, only on this plan': 'معدن مصنفر، في هذه الخطة فقط',
  'Discounted airport lounge passes': 'تذاكر صالات مطار بخصم',
  'Save on your spending': 'وفّر في إنفاقك', 'Plan your wealth': 'خطّط لثروتك', 'Travel with ease': 'سافر بسهولة',
  'Fee-free ATM withdrawals': 'سحب نقدي بدون رسوم', 'Fee-free exchanges': 'صرف عملات بدون رسوم',
  'iCASH points': 'نقاط آي كاش', 'Flexible cash funds': 'صناديق نقدية مرنة',
  'Commission-free trades': 'تداولات بدون عمولة', 'Miles transfer': 'تحويل الأميال',
  'Unlimited': 'غير محدود', 'Explore your subscriptions': 'استعرض اشتراكاتك',
  'Merchant portal': 'بوابة التجار', 'Take payments and see your sales': 'استلم المدفوعات وتابع مبيعاتك',
  'Take card payments in your shop': 'اقبل الدفع بالبطاقات في متجرك',
  'Collected all time': 'المحصّل منذ البداية', 'Tap to Pay on iPhone': 'الدفع باللمس على آيفون',
  'Accept contactless payments without connecting external hardware': 'اقبل الدفع اللاسلكي دون أجهزة خارجية',
  'Show a code and let the customer scan it to pay': 'اعرض رمزاً ليمسحه العميل ويدفع',
  'Hold card horizontally': 'أمسك البطاقة أفقياً',
  'Near the top of the iPhone. Contactless cards, Apple Pay and Google Pay.': 'قرب أعلى الآيفون. البطاقات اللاسلكية وApple Pay وGoogle Pay.',
  'Airlines': 'شركات الطيران', 'Flight Finder': 'باحث الرحلات', 'Search flights': 'ابحث عن رحلات',
  'Reward seats from Baghdad': 'مقاعد المكافآت من بغداد', 'TRAVELLERS': 'المسافرون', 'DATES': 'التواريخ',
  'CITY': 'المدينة', 'GUESTS': 'الضيوف', 'Top deals': 'أفضل العروض', 'Top destinations': 'أبرز المدن',
  'Discover': 'استكشف', 'Favourites': 'المفضلة', 'Bookings': 'الحجوزات',
  'Iraqi Airways': 'الخطوط الجوية العراقية', 'Fly Baghdad': 'فلاي بغداد', 'Turkish Airlines': 'الخطوط التركية',
  'Emirates': 'طيران الإمارات', 'Qatar Airways': 'الخطوط القطرية', 'Etihad Airways': 'الاتحاد للطيران',
  'Book your next trip': 'احجز رحلتك القادمة', 'Weekends in Baghdad': 'عطلات في بغداد',
  'Turn points into miles on any route': 'حوّل نقاطك إلى أميال على أي مسار',
  'Redeem points against any stay': 'استبدل نقاطك في أي إقامة',
  'Agents take cash and credit your iCASH balance instantly. Bring your phone number.': 'يستلم الوكلاء النقد ويضيفونه إلى رصيدك فوراً. أحضر رقم هاتفك.',
  'Prices in IQD per night, taxes included. Pay with your iCASH card or points.': 'الأسعار بالدينار لليلة، شاملة الضرائب. ادفع ببطاقة آي كاش أو بالنقاط.',
  'Indicative rates, updated daily. iCASH adds no markup inside your plan limits.': 'أسعار إرشادية تُحدّث يومياً. لا يضيف آي كاش أي هامش داخل حدود خطتك.',
  'Show this code at any iCASH agent, kiosk or exchange office. The amount lands in your balance instantly.': 'اعرض هذا الرمز في أي وكيل أو كشك أو صرافة آي كاش. يُضاف المبلغ إلى رصيدك فوراً.',
  'Point the camera at the recipient\'s iCASH code.': 'وجّه الكاميرا إلى رمز آي كاش الخاص بالمستلم.',
  'Personal loan': 'قرض شخصي', 'Simple way to invest. Capital at risk.': 'طريقة بسيطة للاستثمار. رأس المال معرض للمخاطرة.',
  '4,2% a year, withdraw anytime': '4,2% سنوياً، اسحب في أي وقت', '4,2% a year': '4,2% سنوياً',
  'Due 1 Oct': 'الاستحقاق 1 تشرين الأول', 'Due 22 Sep': 'الاستحقاق 22 أيلول', 'Due 18 Sep': 'الاستحقاق 18 أيلول',
  'Standard': 'الأساسية', 'Work': 'العمل', 'Yesterday': 'أمس', 'Jan': 'كانون الثاني', 'Feb': 'شباط',
  'Mar': 'آذار', 'Apr': 'نيسان', 'May': 'أيار', 'Jun': 'حزيران', 'Jul': 'تموز', 'Aug': 'آب',
  'Sep': 'أيلول', 'Oct': 'تشرين الأول', 'Nov': 'تشرين الثاني', 'Dec': 'كانون الأول',
  'August': 'آب', 'September': 'أيلول', 'yesterday': 'أمس', 'last week': 'الأسبوع الماضي',
  'this year': 'هذه السنة', 'in 6 months': 'خلال 6 أشهر', 'shares': 'سهم', 'points': 'نقطة',
  'today, 10:00–14:00 Baghdad time': 'اليوم، 10:00–14:00 بتوقيت بغداد',
  'last 5 trading sessions': 'آخر 5 جلسات تداول', 'last 30 days': 'آخر 30 يوماً',
  'last 6 months': 'آخر 6 أشهر', 'last 12 months': 'آخر 12 شهراً', 'last 5 years': 'آخر 5 سنوات',
  'Iraq Stock Exchange': 'سوق العراق للأوراق المالية', 'Today': 'اليوم', 'This week': 'هذا الأسبوع',
  'This month': 'هذا الشهر', 'This year': 'هذه السنة', '6 months': '6 أشهر', '5 years': '5 سنوات',
  'Commercial bank': 'مصرف تجاري', 'Mobile network': 'شبكة اتصالات', 'Beverages': 'المشروبات',
  'instant': 'فوري', 'code by SMS': 'رمز برسالة نصية', 'Completed': 'مكتملة', 'Top-up': 'تعبئة',
  '2 payments': 'دفعتان', '1 payment': 'دفعة واحدة', '3 rides': '3 رحلات', '9 rides': '9 رحلات',
  '32 rides': '32 رحلة', '2 top-ups': 'تعبئتان', '4 top-ups': '4 تعبئات', 'Owner': 'المالك',
  'paid from Main account ·· 9169': 'مدفوع من الحساب الرئيسي ·· 9169',
  'Main account ·· 9169': 'الحساب الرئيسي ·· 9169', 'Sent to': 'أُرسل إلى', 'Added to your Main account ·· 9169': 'أُضيف إلى حسابك الرئيسي ·· 9169',
  'Karrada Market': 'سوق الكرادة', 'Al-Jadriya Mobile': 'موبايل الجادرية', 'Zain Cash point': 'نقطة زين كاش',
  'Baghdad Mall kiosk': 'كشك بغداد مول', 'Al-Rasheed Exchange': 'صرافة الرشيد',
  'Iraq Stock Exchange · orders execute at the next session open.': 'سوق العراق للأوراق المالية · تُنفّذ الأوامر في جلسة التداول التالية.',
  'Bank of Baghdad': 'مصرف بغداد', 'Asiacell Communications': 'آسياسيل للاتصالات', 'Asiacell': 'آسياسيل',
  'Baghdad Soft Drinks': 'بغداد للمشروبات الغازية', 'Gold, 1 g': 'ذهب، 1 غرام', 'Zain Iraq': 'زين العراق',
  'Korek': 'كورك', 'Earthlink': 'إيرثلنك', 'Al Rashid Market': 'سوق الرشيد', 'Ciao Cafe': 'مقهى تشاو',
  'Karrada Taxi': 'تكسي الكرادة', 'Electricity': 'الكهرباء', 'Rent · Al Mansour': 'الإيجار · المنصور',
  'Available to withdraw or to buy with. Settled sales land here first.': 'متاح للسحب أو للشراء. تُودع حصيلة البيع هنا أولاً.',
  'Orders in this prototype are simulated. Capital at risk.': 'الأوامر في هذا النموذج محاكاة. رأس المال معرض للمخاطرة.',
  'Executes at the next Iraq Stock Exchange session · 10:00 Baghdad. Fees shown are final.': 'يُنفّذ في جلسة سوق العراق التالية · 10:00 بتوقيت بغداد. الرسوم المعروضة نهائية.',
  'No fee. Digital goods cannot be refunded once the code is revealed.': 'بدون رسوم. لا تُسترجع المنتجات الرقمية بعد كشف الرمز.',
  'Share these to receive money from any Iraqi bank or iCASH user.': 'شارك هذه التفاصيل لاستلام الأموال من أي مصرف عراقي أو مستخدم آي كاش.',
  'Share these to receive money from abroad. Incoming currency is converted to IQD at the live rate.': 'شارك هذه التفاصيل لاستلام حوالات من الخارج. تُحوّل العملة الواردة إلى الدينار بالسعر اللحظي.',
  'Money sent to these details arrives in your Main account ·· 9169.': 'الأموال المرسلة إلى هذه التفاصيل تصل إلى حسابك الرئيسي ·· 9169.',
  'Taken from the ID you verified when you opened your iCASH account. Tap a field to request a change.': 'مأخوذ من هوية التوثيق عند فتح حساب آي كاش. اضغط أي حقل لطلب التعديل.',
  'This has to match the identity document on your iCASH account.': 'يجب أن يطابق مستند الهوية المسجّل في حسابك.',
  'Iraqi regulation requires us to ask this before you can trade.': 'الأنظمة العراقية تُلزمنا بالسؤال قبل السماح بالتداول.',
  'You verified your identity when you opened your account, so there is nothing new to upload.': 'تم توثيق هويتك عند فتح الحساب، لذا لا حاجة لرفع مستندات جديدة.',
  'Trading on the Iraq Stock Exchange is enabled. Your capital is at risk.': 'تم تمكين التداول في سوق العراق للأوراق المالية. رأس المال معرض للمخاطرة.',
  'iCASH Invest is provided under licence. Capital at risk.': 'آي كاش للاستثمار مرخّص. رأس المال معرض للمخاطرة.',
  'Trades in this prototype are simulated.': 'التداولات في هذا النموذج محاكاة.',
  '0% commission within your plan limits': 'عمولة 0% داخل حدود خطتك',
  'Iraq Stock Exchange listings shown in IQD per share. Your capital is at risk; trading is not live in this prototype.': 'أسعار سوق العراق معروضة بالدينار لكل سهم. رأس المال معرض للمخاطرة، والتداول غير فعلي في هذا النموذج.',
  'Iraqi national ID ·· 4471': 'الهوية الوطنية العراقية ·· 4471',
  'Verified 10 September 2026 · valid to 2031': 'موثّقة في 10 أيلول 2026 · صالحة حتى 2031',
  'Personal account · opened 10 September 2026': 'حساب شخصي · فُتح في 10 أيلول 2026',
  'Karrada, Baghdad, Iraq': 'الكرادة، بغداد، العراق', 'Iraq · Baghdad': 'العراق · بغداد',
  '14 March 1994': '14 آذار 1994', 'Code delivered by SMS and in the app': 'يُسلَّم الرمز برسالة نصية وفي التطبيق',
  'Global data, active in minutes': 'بيانات عالمية تُفعّل في دقائق', 'Airport lounge passes': 'تذاكر صالات المطار',
  'Pass in your wallet': 'التذكرة في محفظتك', 'Code sent by SMS': 'أُرسل الرمز برسالة نصية',
  'Pass added to your wallet': 'أُضيفت التذكرة إلى محفظتك', 'Asiacell, Zain, Korek': 'آسياسيل، زين، كورك',
  '·· 9169 · IQD · arrives instantly': '·· 9169 · دينار · يصل فوراً',
  'Prices are delayed by 15 minutes; your capital is at risk.': 'الأسعار متأخرة 15 دقيقة، ورأس المال معرض للمخاطرة.',
  'Home': 'الرئيسية', 'Cards': 'البطاقات', 'Invest': 'الاستثمار', 'Transfers': 'التحويلات',
  'Rewards': 'المكافآت', 'Search': 'بحث', 'Search airlines': 'بحث عن الطيران', 'Search sales': 'بحث في المبيعات',
  'Personal · IQD': 'شخصي · دينار عراقي', 'Accounts': 'الحسابات', 'Add money': 'إضافة رصيد', 'Move': 'تحويل',
  'Details': 'التفاصيل', 'More': 'المزيد', 'See all': 'عرض الكل', 'See all benefits': 'عرض كل المزايا',
  'Show more': 'عرض المزيد', 'Discover more': 'اكتشف المزيد', 'Your widgets': 'أدواتك', 'Edit': 'تعديل',
  'Upcoming': 'المدفوعات القادمة', 'Manage': 'إدارة', 'Done': 'تم', 'Close': 'إغلاق', 'All': 'الكل',
  'Copy': 'نسخ', 'Copied': 'تم النسخ', 'Share': 'مشاركة', 'Share receipt': 'مشاركة الإيصال', 'Card': 'بطاقة',
  'Transfer': 'تحويل', 'Mobile': 'موبايل', 'Enter your passcode': 'أدخل رمز الدخول',
  'Wrong PIN, try again': 'رمز خاطئ، حاول مرة أخرى', 'Forgot PIN?': 'نسيت الرمز؟',
  'BOLD · SIMPLE · IMPACTFUL': 'جسور · بسيط · مؤثر',
  'Account details': 'تفاصيل الحساب', 'Local': 'محلي', 'International': 'دولي', 'Copy all details': 'نسخ كل التفاصيل',
  'ACCOUNT HOLDER': 'صاحب الحساب', 'ACCOUNT NUMBER': 'رقم الحساب', 'IBAN': 'الآيبان', 'BANK': 'المصرف',
  'CURRENCY': 'العملة', 'PHONE TAG': 'رقم الهاتف', 'SWIFT / BIC': 'سويفت / BIC', 'BANK ADDRESS': 'عنوان المصرف',
  'REFERENCE': 'المرجع', 'Not required': 'غير مطلوب', 'Ahmed Al Janahi': 'أحمد الجناحي',
  'IQD · Iraqi Dinar': 'دينار عراقي', 'iCASH Iraq · Baghdad': 'آي كاش العراق · بغداد',
  'Analytics': 'التحليلات', 'Day': 'يوم', 'Week': 'أسبوع', 'Month': 'شهر', 'Spent': 'أنفقت',
  'today': 'اليوم', 'this week': 'هذا الأسبوع', 'this month': 'هذا الشهر',
  'Net cashflow': 'صافي التدفق النقدي', 'Average per day': 'المتوسط اليومي', 'Average per hour': 'المتوسط بالساعة',
  'Where it went': 'أوجه الإنفاق', 'Top merchants': 'أكثر المتاجر', 'Monthly budget': 'الميزانية الشهرية',
  'Groceries': 'البقالة', 'Cafes and food': 'المقاهي والمطاعم', 'Transport': 'النقل', 'Bills and top-ups': 'الفواتير والتعبئة',
  'Other': 'أخرى', 'Personal': 'شخصي',
  'Grow your wealth': 'نمِّ ثروتك', 'Invest today, from 1.000 IQD': 'ابدأ الاستثمار من 1.000 دينار',
  'Start investing': 'ابدأ الاستثمار', 'Total investments': 'إجمالي الاستثمارات', 'Your holdings': 'محفظتك',
  'Trade': 'تداول', 'Withdraw': 'سحب', 'Watchlist': 'قائمة المتابعة', 'Products': 'المنتجات',
  'Popular first time buys': 'الأكثر شراءً للمبتدئين', 'Stocks': 'الأسهم', 'ETFs': 'الصناديق',
  'Savings': 'التوفير', 'Portfolios': 'المحافظ', 'Sukuk': 'الصكوك', 'Gold': 'الذهب',
  'Confirm your legal name': 'أكّد اسمك القانوني', 'Where do your funds come from?': 'ما مصدر أموالك؟',
  'Reuse your iCASH verification': 'استخدم توثيق آي كاش الحالي', 'Your investment account is open': 'تم فتح حساب الاستثمار',
  'This is me': 'هذا أنا', 'Continue': 'متابعة', 'Use this verification': 'استخدم هذا التوثيق',
  'Verify a new document instead': 'توثيق مستند جديد', 'FULL LEGAL NAME': 'الاسم القانوني الكامل',
  'DATE OF BIRTH': 'تاريخ الميلاد', 'COUNTRY OF RESIDENCE': 'بلد الإقامة', 'Salary': 'راتب',
  'Business income': 'أرباح عمل', 'Investment returns': 'عوائد استثمار', 'Family support': 'دعم عائلي',
  'Monthly pay from an employer': 'راتب شهري من جهة عمل', 'Profits from a company you own': 'أرباح شركة تملكها',
  'Money saved over time': 'مبالغ موفّرة مع الوقت', 'Dividends, rent or sale proceeds': 'أرباح أسهم أو إيجار أو بيع',
  'Gifts or support from relatives': 'هدايا أو دعم من الأقارب', 'Tell us more in the next step': 'أخبرنا المزيد في الخطوة التالية',
  'VERIFIED': 'موثّق', 'Document authenticity checked': 'تم التحقق من صحة المستند',
  'Selfie matched to your document': 'تمت مطابقة صورتك مع المستند', 'Address and residence confirmed': 'تم تأكيد العنوان والإقامة',
  'Account holder': 'صاحب الحساب', 'Source of funds': 'مصدر الأموال', 'Verification': 'التوثيق',
  'Commission': 'العمولة', 'Reused from iCASH KYC': 'مأخوذ من توثيق آي كاش',
  'Your positions': 'مراكزك', 'Cash in your investment account': 'النقد في حساب الاستثمار',
  'Withdraw to Main account': 'سحب إلى الحساب الرئيسي', 'Buy': 'شراء', 'Sell': 'بيع',
  'You receive after fees': 'ما ستستلمه بعد الرسوم', 'Total cost including fees': 'التكلفة الإجمالية مع الرسوم',
  'Selling': 'بيع', 'Buying': 'شراء', 'Sale value': 'قيمة البيع', 'Order value': 'قيمة الأمر',
  'Net to your cash': 'الصافي إلى نقدك', 'Total to pay': 'المبلغ المطلوب', 'Sell order placed': 'تم تنفيذ أمر البيع',
  'Buy order placed': 'تم تنفيذ أمر الشراء', 'Service fee': 'رسوم الخدمة', 'ISX levy': 'رسم سوق العراق',
  'Total paid': 'المبلغ المدفوع', 'Total': 'الإجمالي', 'Fee': 'الرسوم', 'No fee': 'بدون رسوم',
  'From': 'من', 'To': 'إلى', 'FROM': 'من', 'TO': 'إلى', 'Arrives': 'يصل', 'Instantly': 'فوراً',
  'Instant': 'فوري', 'Money added': 'تمت إضافة الرصيد', 'Money sent': 'تم إرسال المبلغ',
  'Investment account · cash': 'حساب الاستثمار · نقد', 'Enter an amount': 'أدخل المبلغ',
  'Amount too high': 'المبلغ أكبر من المتاح', 'Transfer calendar': 'تقويم التحويلات',
  'September 2026': 'أيلول 2026', 'No transfers on this day': 'لا تحويلات في هذا اليوم',
  'Mo': 'إث', 'Tu': 'ثل', 'We': 'أر', 'Th': 'خم', 'Fr': 'جم', 'Sa': 'سب', 'Su': 'أح',
  'You sent': 'أرسلت', 'Sent you': 'أرسل لك', 'Scheduled': 'مجدول',
  'Add new': 'إضافة جديدة', 'Show details': 'إظهار التفاصيل', 'Hide details': 'إخفاء التفاصيل',
  'Freeze': 'تجميد', 'Unfreeze': 'إلغاء التجميد', 'Settings': 'الإعدادات', 'Terminate card': 'إيقاف البطاقة',
  'Get help with the card': 'مساعدة بشأن البطاقة', 'Want to reactivate a terminated card?': 'تريد إعادة تنشيط بطاقة موقوفة؟',
  'Online payments': 'المدفوعات الإلكترونية', 'Card can be used on websites': 'إمكانية استخدام البطاقة على المواقع',
  'Contactless': 'الدفع اللاسلكي', 'Tap to pay in shops': 'المس للدفع في المتاجر',
  'ATM withdrawals': 'السحب من الصراف', 'Cash from any machine': 'نقد من أي صراف',
  'Card number': 'رقم البطاقة', 'Add to wallet': 'إضافة إلى المحفظة', 'Get card for free': 'احصل على البطاقة مجاناً',
  'Physical': 'بطاقة فعلية', 'Virtual': 'بطاقة رقمية', 'ACTIVE': 'نشطة', 'FROZEN': 'مجمّدة', 'NEW': 'جديدة',
  'Find agents nearby': 'ابحث عن وكلاء قريبين', 'Map': 'الخريطة', 'Settlement': 'التسوية',
  'Forgot password?': 'نسيت كلمة المرور؟', 'Turn points into miles': 'حوّل نقاطك إلى أميال',
  'Invite friends': 'دعوة الأصدقاء', 'Chats': 'المحادثات', 'Personal info': 'المعلومات الشخصية',
  'Security': 'الأمان', 'Documents and statements': 'المستندات وكشوف الحساب', 'FAQ': 'الأسئلة الشائعة',
  'Language': 'اللغة', 'English': 'English', 'Statements': 'كشوف الحساب', 'Standing orders': 'الأوامر المستمرة',
  'Convert': 'تحويل العملات', 'Earn': 'اكسب', 'Redeem': 'استبدل', 'Plan perks': 'مزايا الخطة',
  'Miles': 'الأميال', 'Stays': 'الإقامات', 'eSIM': 'شريحة إلكترونية', 'Shops': 'المتاجر',
  'Gift cards': 'بطاقات الهدايا', 'Lounges': 'صالات المطار', 'Pocket': 'الجيب', 'Digital goods': 'المنتجات الرقمية',
  'Gaming cards': 'بطاقات الألعاب', 'Top-ups': 'التعبئة', 'Top brands': 'أبرز العلامات', 'Transactions': 'الحركات',
  'CHOOSE AN AMOUNT': 'اختر المبلغ', 'Pay from': 'الدفع من', 'Delivery': 'التسليم', 'Points earned': 'النقاط المكتسبة',
  'Upgrade': 'ترقية', 'Members': 'الأعضاء', 'Gift plan': 'إهداء الخطة', 'Billing': 'الفواتير', 'See plans': 'الخطط',
  'Insurance': 'التأمين', 'Exclusive card': 'بطاقة حصرية', 'Home widgets': 'أدوات الرئيسية',
  'Spend this month': 'إنفاق هذا الشهر', 'Total wealth': 'إجمالي الثروة', 'Spent this week': 'إنفاق هذا الأسبوع',
  'Left to spend': 'المتبقي للإنفاق', 'Pay later': 'الدفع لاحقاً', 'Savings vault': 'خزنة التوفير',
  'Request money': 'طلب مبلغ', 'Show my QR': 'إظهار رمزي', 'Scan a QR': 'مسح رمز', 'Account number': 'رقم الحساب',
  'Phone number': 'رقم الهاتف', 'Send to a phone number': 'إرسال إلى رقم هاتف', 'Send to an account number': 'إرسال إلى رقم حساب',
  'QR top-up': 'تعبئة برمز QR', 'New sale': 'عملية بيع', 'In-person': 'حضوري', 'QR code': 'رمز QR',
  'Links': 'الروابط', 'Invoices': 'الفواتير', 'Refund': 'استرجاع', 'Merchant portal': 'بوابة التجار',
  'Become a merchant': 'كن تاجراً', 'Sign up': 'إنشاء حساب', 'Log in': 'تسجيل الدخول', 'Skip': 'تخطي',
  'Not now': 'ليس الآن', 'Overview': 'نظرة عامة', 'Financials': 'البيانات المالية', 'Order book': 'سجل الأوامر',
  'Open': 'الافتتاح', 'Day range': 'مدى اليوم', 'Volume': 'حجم التداول', 'Market cap': 'القيمة السوقية',
  'Highest': 'الأعلى', 'In': 'داخل', 'Out': 'خارج', 'Apply': 'تقديم', 'Start': 'ابدأ',
  'Personal loan': 'قرض شخصي', 'Brokerage account': 'حساب وساطة', 'Get a quote in minutes': 'احصل على عرض في دقائق',
};
const AR_RX = [
  [/^(\d+) (sales|paid)$/, (m, a, k) => a + (k === 'sales' ? ' عملية بيع' : ' مدفوعة')],
  [/^(\d+) payments$/, (m, a) => a + ' عملية دفع'],
  [/^Open until (\d{2}:\d{2})$/, (m, t) => 'مفتوح حتى ' + t],
  [/^([\d.,]+) IQD \/ night$/, (m, a) => a + ' دينار لليلة'],
  [/^IQD \/ night$/, () => 'دينار لليلة'],
  [/^([\d.,]+) IQD \/ year$/, (m, a) => a + ' دينار سنوياً'],
  [/^1 point for every ([\d.]+) IQD spent$/, (m, a) => 'نقطة واحدة لكل ' + a + ' دينار تُنفق'],
  [/^Up to 1 point for every ([\d.]+) IQD spent$/, (m, a) => 'حتى نقطة واحدة لكل ' + a + ' دينار تُنفق'],
  [/^([\d.]+) IQD fee-free ATM withdrawals a month$/, (m, a) => 'سحب نقدي بدون رسوم حتى ' + a + ' دينار شهرياً'],
  [/^Unlimited fee-free ATM withdrawals$/, () => 'سحب نقدي غير محدود بدون رسوم'],
  [/^Discounted · ([\d.]+) IQD per pass$/, (m, a) => 'بخصم · ' + a + ' دينار للتذكرة'],
  [/^(\d+) \/ (\d+) used this month$/, (m, a, b) => a + ' من ' + b + ' مستخدمة هذا الشهر'],
  [/^Up to ([\d,]+)% returns \(variable\)$/, (m, a) => 'عوائد حتى ' + a + '% (متغيّرة)'],
  [/^Baghdad → (.+)$/, (m, c) => 'بغداد → ' + (AR[c] || c)],
  [/^([\d.]+) mi$/, (m, a) => a + ' ميل'],
  [/^([\d.]+) points$/, (m, a) => a + ' نقطة'],
  [/^(\d{1,2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/, (m, d, mo) => d + ' ' + AR[mo]],
  [/^(\d{1,2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec), (\d{2}:\d{2})$/, (m, d, mo, t) => d + ' ' + AR[mo] + '، ' + t],
  [/^Due (\d{1,2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/, (m, d, mo) => 'الاستحقاق ' + d + ' ' + AR[mo]],
  [/^due (\d{1,2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/, (m, d, mo) => 'الاستحقاق ' + d + ' ' + AR[mo]],
  [/^Next payment on (\d{1,2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/, (m, d, mo) => 'الدفعة القادمة في ' + d + ' ' + AR[mo]],
  [/^(Today|Yesterday), (\d{2}:\d{2})$/, (m, d, t) => (d === 'Today' ? 'اليوم' : 'أمس') + '، ' + t],
  [/^You sent ([\d.]+) IQD$/, (m, a) => 'أرسلت ' + a + ' دينار'],
  [/^Sent you ([\d.]+) IQD$/, (m, a) => 'أرسل لك ' + a + ' دينار'],
  [/^(\d+) subscriptions?$/, (m, a) => a + ' اشتراك'],
  [/^(\d+) of (\d+)$/, (m, a, b) => a + ' من ' + b],
  [/^(\d+) days? left$/, (m, a) => 'باقي ' + a + ' يوم'],
  [/^(\d+) payments? left$/, (m, a) => 'باقي ' + a + ' دفعة'],
  [/^([+−-][\d,]+)% this month$/, (m, a) => a + '% هذا الشهر'],
  [/^(\d+) stays$/, (m, a) => a + ' إقامة'],
  [/^Asiacell due in (\d+) days$/, (m, a) => 'آسياسيل تستحق خلال ' + a + ' أيام'],
  [/^([\d.,]+) \/ ([\d.,]+) IQD$/, (m, a, b) => a + ' / ' + b + ' دينار'],
  [/^([\d.,]+) IQD withdrawn$/, (m, a) => a + ' دينار مسحوبة'],
  [/^Up to ([\d,]+)% a year \(variable\)$/, (m, a) => 'حتى ' + a + '% سنوياً (متغيّر)'],
  [/^([\d.]+) shares$/, (m, a) => a + ' سهم'],
  [/^([\d.,]+) g$/, (m, a) => a + ' غرام'],
  [/^([\d.,]+) g · avg ([\d.,]+)$/, (m, a, b) => a + ' غرام · متوسط ' + b],
  [/^([+−-][\d,]+)% vs (.+)$/, (m, a, b) => a + '% مقارنةً بـ' + (AR[b] || b)],
  [/^([+−-][\d.]+) IQD · ([+−-][\d,]+)% (.+)$/, (m, a, p, r) => a + ' دينار · ' + p + '% ' + (AR[r] || r)],
  [/^([\d.]+) IQD$/, (m, a) => a + ' دينار'],
  [/^([\d.]+) IQD \/ (year|month)$/, (m, a, u) => a + ' دينار / ' + (u === 'year' ? 'سنة' : 'شهر')],
  [/^(\d+) stays$/, (m, a) => a + ' إقامة'],
  [/^(\d+) points?$/, (m, a) => a + ' نقطة'],
  [/^\+([\d.,]+) points$/, (m, a) => '+' + a + ' نقطة'],
  [/^Spent ([\d.]+) of ([\d.]+) IQD$/, (m, a, b) => 'أنفقت ' + a + ' من ' + b + ' دينار'],
  [/^(\d+) September 2026$/, (m, d) => d + ' أيلول 2026'],
  [/^([+−-][\d.]+) IQD · (\d+) transfers?$/, (m, a, n) => a + ' دينار · ' + n + ' تحويل'],
  [/^(\d+) shares · avg ([\d.,]+)$/, (m, a, b) => a + ' سهم · متوسط ' + b],
  [/^Price per share$/, () => 'السعر لكل سهم'],
  [/^Price per gram$/, () => 'السعر لكل غرام'],
  [/^Main account ·· (\d+) · IQD$/, (m, a) => 'الحساب الرئيسي ·· ' + a + ' · دينار'],
  [/^Confirm (sale|purchase) of (.+)$/, (m, k, q) => (k === 'sale' ? 'تأكيد بيع ' : 'تأكيد شراء ') + q],
  [/^Pay ([\d.]+) IQD$/, (m, a) => 'ادفع ' + a + ' دينار'],
  [/^Withdraw ([\d.]+) IQD$/, (m, a) => 'اسحب ' + a + ' دينار'],
  [/^([\d.]+) IQD available · no fee$/, (m, a) => a + ' دينار متاح · بدون رسوم'],
  [/^Service fee · ([\d,]+)% \(min ([\d.]+) IQD\)$/, (m, p, x) => 'رسوم الخدمة · ' + p + '% (الحد الأدنى ' + x + ' دينار)'],
  [/^ISX levy · ([\d,]+)%$/, (m, p) => 'رسم سوق العراق · ' + p + '%'],
];


const L_BG = {
  '#050a10': '#FFFFFF', '#0a1420': '#FFFFFF', '#0b1119': '#FFFFFF', '#050b12': '#FFFFFF',
  '#15191e': '#FFFFFF', '#111f31': '#FFFFFF', '#161b22': '#FFFFFF', '#0f1620': '#FFFFFF',
  '#0e1218': '#FFFFFF', '#1d242c': '#F2F5F9', '#171d25': '#FAFBFD', '#12181f': '#F6F8FB',
};
// cards lose their contrast once everything is white, so they get a hairline instead
const L_CARD = { '#15191e': 1, '#111f31': 1, '#161b22': 1, '#0f1620': 1, '#0e1218': 1 };
const L_INK = {
  '#ffffff': '#0B1119', '#8a95a2': '#5C6673', '#6e7986': '#697280',
  '#c9cfd6': '#48515C', '#4b5563': '#98A2B0', '#d8dce2': '#B9C1CB',
};

// inline styles come back from the DOM as rgb()/rgba(), so every lookup goes through here
function parseColor(v) {
  const s = (v || '').trim().toLowerCase();
  let m = s.match(/^#([0-9a-f]{6})$/);
  if (m) return { hex: '#' + m[1], a: 1 };
  m = s.match(/^#([0-9a-f]{3})$/);
  if (m) return { hex: '#' + m[1].split('').map(c => c + c).join(''), a: 1 };
  m = s.match(/^rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s\/]+([\d.]+))?\s*\)$/);
  if (!m) return null;
  const hex = '#' + [1, 2, 3].map(i => ('0' + parseInt(m[i], 10).toString(16)).slice(-2)).join('');
  return { hex: hex, a: m[4] === undefined ? 1 : parseFloat(m[4]) };
}

// a wash gradient sits on the app's dark base; card art is its own opaque surface
function gradientSurface(v) {
  const stops = v.match(/#[0-9a-f]{3,8}|rgba?\([^)]*\)/gi) || [];
  if (stops.some(c => { const p = parseColor(c); return p && p.a >= 0.9 && L_BG[p.hex]; })) return 'inv';
  return stops.some(c => { const p = parseColor(c); return p && p.a >= 0.9; }) ? 'keep' : null;
}

// keep the wash as a hint of colour over white
function lightGradient(v) {
  return v
    .replace(/#([0-9a-f]{6})\b/gi, (m) => L_BG[m.toLowerCase()] || m)
    .replace(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)[,\s\/]+([\d.]+)\s*\)/gi,
      (m, r, g, b, a) => 'rgba(' + r + ',' + g + ',' + b + ',' + Math.min(0.2, parseFloat(a) * 0.38).toFixed(3) + ')');
}

function lightCss(el, css) {
  const parent = el.parentElement && el.parentElement.dataset ? (el.parentElement.dataset.surf || '') : '';
  const masked = css.indexOf('mask-image') >= 0;
  const decls = css.split(';').map(d => {
    const i = d.indexOf(':');
    return i < 0 ? [null, d] : [d.slice(0, i).trim().toLowerCase(), d.slice(i + 1)];
  });

  let surf = parent;
  decls.forEach(([p, v]) => {
    if (p !== 'background' && p !== 'background-color' && p !== 'background-image') return;
    const val = (v || '').trim();
    if (masked || !val || val === 'none' || val === 'transparent') return;
    if (/gradient/i.test(val)) { const g = gradientSurface(val); if (g) surf = g; return; }
    const c = parseColor(val);
    if (!c) { surf = 'keep'; return; }
    if (c.a <= 0.3) return;                       // translucent tint: sits on whatever is behind
    if (L_BG[c.hex]) { surf = 'inv'; return; }
    surf = 'keep';
  });
  el.dataset.surf = surf;

  const ink = (val) => {
    if (surf !== 'inv') return null;
    const c = parseColor(val);
    if (!c) return null;
    if (c.a >= 0.9) return L_INK[c.hex] || null;
    return c.hex === '#ffffff' ? 'rgba(11,17,25,' + Math.max(0.62, Math.min(0.92, c.a)).toFixed(2) + ')' : null;
  };

  let hair = false;
  const outDecls = decls.map(([p, v]) => {
    if (!p) return v;
    const head = p + ':';
    const val = (v || '').trim();
    if (p === 'background' || p === 'background-color' || p === 'background-image') {
      if (/gradient/i.test(val)) return surf === 'inv' ? head + lightGradient(val) : p + ':' + v;
      const c = parseColor(val);
      if (!c) return p + ':' + v;
      if (masked) { const k = c.a >= 0.9 ? L_INK[c.hex] : null; return k ? head + k : p + ':' + v; }
      if (c.a >= 0.9 && L_BG[c.hex]) {
        if (L_CARD[c.hex] && css.indexOf('border-radius') >= 0 && !/(^|;)\s*border/.test(css)) hair = true;
        return head + L_BG[c.hex];
      }
      if (c.a <= 0.3 && c.hex === '#ffffff' && (surf === 'inv' || parent === 'inv')) {
        return head + 'rgba(11,17,25,' + Math.min(0.09, c.a * 0.7 + 0.02).toFixed(3) + ')';
      }
      return p + ':' + v;
    }
    if (p === 'color' || p === 'fill' || p === 'stroke' || p === 'caret-color') {
      const k = ink(val);
      return k ? head + k : p + ':' + v;
    }
    if (p.indexOf('border') === 0 || p === 'outline') {
      if (surf !== 'inv' && parent !== 'inv') return p + ':' + v;
      return head + val.replace(/rgba?\(\s*255[,\s]+255[,\s]+255(?:[,\s\/]+([\d.]+))?\s*\)/gi,
        (m, a) => a === undefined ? '#0B1119' : 'rgba(11,17,25,' + Math.min(0.16, parseFloat(a) + 0.03).toFixed(2) + ')');
    }
    if (p === 'box-shadow') {
      return head + val.replace(/rgba\(\s*0[,\s]+0[,\s]+0[,\s]+[\d.]+\s*\)/gi, 'rgba(15,23,42,.12)');
    }
    return p + ':' + v;
  });
  return outDecls.join(';') + (hair ? ';border:1px solid #E8ECF2' : '');
}

// physical CSS (left/right paddings, offsets, chevrons) has to be mirrored by hand
function mirrorCss(css) {
  let s = css
    .replace(/\b(padding|margin)\s*:\s*([^;]+)/g, (m, p, v) => {
      const parts = v.trim().split(/\s+/);
      return parts.length === 4 ? p + ':' + [parts[0], parts[3], parts[2], parts[1]].join(' ') : m;
    })
    .replace(/\b(padding|margin|border)-(left|right)\b/g, (m, p, d) => p + '-' + (d === 'left' ? 'right' : 'left'))
    .replace(/(^|;)(\s*)left:/g, '$1$2__SWAP:')
    .replace(/(^|;)(\s*)right:/g, '$1$2left:')
    .replace(/__SWAP:/g, 'right:')
    .replace(/text-align:\s*left/g, 'text-align:__SWAP')
    .replace(/text-align:\s*right/g, 'text-align:left')
    .replace(/text-align:__SWAP/g, 'text-align:right');
  if (/rotate\(45deg\)/.test(s)) s = s.replace(/transform:\s*/g, 'transform:scaleX(-1) ');
  return s;
}
const LK_PROVIDERS = [
  { key: 'qi', name: 'Qi Card', art: 'linear-gradient(135deg,#E8453C,#7A1712)', fee: 'No top-up fee', limit: '5.000.000 IQD a day' },
  { key: 'zain', name: 'Zain Cash', art: 'linear-gradient(135deg,#7C3AED,#2A1160)', fee: '0,5% top-up fee', limit: '2.000.000 IQD a day' },
  { key: 'asia', name: 'Asiacell Pay', art: 'linear-gradient(135deg,#EC7E00,#7A3E00)', fee: '0,5% top-up fee', limit: '2.000.000 IQD a day' },
  { key: 'fast', name: 'FastPay', art: 'linear-gradient(135deg,#2563EB,#10225C)', fee: 'No top-up fee', limit: '3.000.000 IQD a day' },
  { key: 'visa', name: 'Bank Visa', art: 'linear-gradient(135deg,#1A1F71,#080B33)', fee: '1% top-up fee', limit: '4.000.000 IQD a day' },
  { key: 'nass', name: 'Nass Wallet', art: 'linear-gradient(135deg,#00A78F,#0A3F38)', fee: '0,75% top-up fee', limit: '1.500.000 IQD a day' },
];
const PIN = '1234';
const SPENT = 486200;
const iqd = (n) => n.toLocaleString('de-DE');
const DESIGNS = [
  { name: 'Midnight', title: 'Midnight, 2026', tag: 'STANDARD', sub: 'The everyday iCASH card, in deep navy.', art: 'linear-gradient(150deg,#1B2B3F,#070E18)' },
  { name: 'Signal', title: 'Signal blue, 2026', tag: 'PREMIUM', sub: 'Brand blue, front and centre.', art: 'linear-gradient(150deg,#2563EB,#10225C)' },
  { name: 'Tigris', title: 'Tigris river, 2026', tag: 'METAL', sub: 'Inspired by the river running through Baghdad.', art: 'linear-gradient(150deg,#00C2A8,#064C52)' },
  { name: 'Amethyst', title: 'Amethyst, 2026', tag: 'PREMIUM', sub: 'For the ones who like a little colour.', art: 'linear-gradient(150deg,#7C3AED,#2C0F6B)' },
];
const OB = [
  { kind: 'welcome', title: '', sub: '', cta: 'Sign up' },
  { kind: 'form', title: "Let's get started", sub: 'Enter your phone number. We will send you a confirmation code.', cta: 'Continue', alt: 'Already have an account? Log in',
    fields: [['COUNTRY', '+964  Iraq', 1], ['MOBILE NUMBER', '770 000 0000', 0]] },
  { kind: 'code', title: '6-digit code', sub: 'We sent it to +964 770 000 0000. It expires in 5 minutes.', cta: 'Continue', alt: 'Resend code in 0:14' },
  { kind: 'form', title: "Don't miss a beat", sub: 'Get notified about spending, security and money movements, so you are always in the know.', cta: 'Enable notifications', alt: 'Not now',
    fields: [['PAYMENTS', 'Every card and wallet payment', 1], ['SECURITY', 'Logins and new devices', 1]] },
  { kind: 'form', title: 'Country of residence', sub: 'The terms and services which apply to you depend on your country of residence.', cta: 'Sign up securely',
    fields: [['COUNTRY', 'Iraq', 1], ['CITY', 'Baghdad', 1]] },
  { kind: 'form', title: 'Name as in ID', sub: 'Use the name exactly as it appears on your official document.', cta: 'Continue',
    fields: [['FIRST NAME', 'Ahmed', 1], ['LAST NAME', 'Al Janahi', 1]] },
  { kind: 'form', title: 'Date of birth', sub: 'You need to be 18 or older to open an iCASH account.', cta: 'Continue',
    fields: [['DAY', '14', 1], ['MONTH', 'March', 1], ['YEAR', '1996', 1]] },
  { kind: 'form', title: 'Home address', sub: 'Please enter your home address exactly as it appears on your utility bill.', cta: 'Continue',
    fields: [['DISTRICT', 'Al Mansour', 1], ['STREET', 'Street 14, building 22', 1], ['CITY', 'Baghdad', 1]] },
  { kind: 'form', title: 'Email', sub: 'We will send your statements and receipts here.', cta: 'Continue',
    fields: [['EMAIL', 'ahmed@icash.com', 1]] },
  { kind: 'pass', title: 'Create passcode', sub: 'You will use this to unlock iCASH and confirm payments.', cta: 'Continue' },
  { kind: 'scan', title: 'Verify your identity', sub: 'Position the front of your document inside the frame.', cta: 'Scan document',
    hint: 'document frame — 355×210', note: 'Iraqi national ID, passport or residence card' },
  { kind: 'scan', title: 'Take a selfie', sub: 'We will compare this with your document. Keep your face inside the oval and remove anything covering it.', cta: 'Take selfie',
    hint: 'selfie frame — 355×210', note: 'Your face and background are captured during this step' },
  { kind: 'chips', title: 'What do you want to use iCASH for?', sub: 'We need this for the regulatory reasons. And also, we are curious.', cta: 'Continue',
    groups: [
      ['Everyday needs', ['Transfers', 'Scheduled payments', 'Cards', 'Cashback', 'Budgeting', 'Bills and top-ups']],
      ['Spending abroad', ['Currency exchange', 'Travel', 'Lounges', 'eSIM']],
      ['Growing money', ['Iraqi stocks', 'Savings vault', 'Gold', 'Sukuk']],
    ] },
  { kind: 'plan', title: 'Select plan', sub: 'You can change or cancel your plan at any time.', cta: 'Get started' },
];
const TIERS = [
  { name: 'Standard', price: 'Free, forever', discount: '', art: 'linear-gradient(150deg,#3A4350,#131820)',
    benefits: [
      { icon: '✦', name: '1 point for every 5.000 IQD spent' },
      { icon: '▣', name: '500.000 IQD fee-free ATM withdrawals a month' },
      { icon: '⇄', name: 'Fee-free exchange up to 2.000.000 IQD a month' },
      { icon: '▤', name: 'Virtual card included' },
    ] },
  { name: 'Gold', price: '150.000 IQD / year', discount: '2 months free', art: 'linear-gradient(150deg,#C6A058,#4A3616)',
    benefits: [
      { icon: '✦', name: '1 point for every 2.000 IQD spent' },
      { icon: '▣', name: '2.000.000 IQD fee-free ATM withdrawals a month' },
      { icon: '⇄', name: 'Unlimited fee-free currency exchange' },
      { icon: '⌾', name: 'Discounted airport lounge passes' },
      { icon: '▥', name: 'Brushed metal card, 1 free replacement' },
    ] },
  { name: 'Ultra', price: '600.000 IQD / year', discount: '3 months discount', art: 'linear-gradient(150deg,#D7DBE2,#3A4049)',
    benefits: [
      { icon: '✦', name: '1 point for every 1.000 IQD spent' },
      { icon: '▣', name: 'Unlimited fee-free ATM withdrawals' },
      { icon: '⇄', name: 'Unlimited exchange at the interbank rate' },
      { icon: '⌾', name: 'Unlimited lounge access for you and a guest' },
      { icon: '▥', name: 'Platinum-plated card and travel insurance' },
      { icon: '⛭', name: '12 partner subscriptions included' },
    ] },
];
const CARDS = [
  { name: 'Standard', meta: '•• 9169, 06/28', art: 'linear-gradient(140deg,#1B2B3F,#0A1420)', state: 'ACTIVE', stateInk: '#6FE3D2', holder: 'AHMED AL JANAHI', number: '•• 9169',
    limitLabel: '486.200 / 1.500.000 IQD', limitPct: '32%', limitNote: 'Resets on 1 October · tap to change the limit',
    tx: [
      { ini: 'A', name: 'To Ahmed', sub: '29 Feb, 20:37 · iCASH · Completed', amt: '27.190', bg: '#2563EB' },
      { ini: 'S', name: 'To Saad', sub: '5 Dec, 22:21 · iCASH · Completed', amt: '27.190', bg: '#EC7E00' },
      { ini: 'H', name: 'To Hayder', sub: '2 Dec, 09:04 · iCASH · Completed', amt: '145.000', bg: '#7C3AED' },
    ] },
  { name: 'Work', meta: '•• 2489, 09/26', art: 'linear-gradient(140deg,#2563EB,#16306B)', state: 'ACTIVE', stateInk: '#6FE3D2', holder: 'AHMED AL JANAHI', number: '•• 2489',
    limitLabel: '1.120.000 / 2.000.000 IQD', limitPct: '56%', limitNote: 'Expenses card · resets on 1 October',
    tx: [
      { ini: 'Z', name: 'Zain Iraq', sub: '12 Sep, 11:02 · iCASH · Completed', amt: '35.000', bg: '#00A78F' },
      { ini: 'T', name: 'Taxi Baghdad', sub: '11 Sep, 18:40 · iCASH · Completed', amt: '12.500', bg: '#EC7E00' },
      { ini: 'O', name: 'Office supplies', sub: '9 Sep, 14:15 · iCASH · Completed', amt: '78.000', bg: '#2563EB' },
    ] },
  { name: 'Virtual', meta: 'Ready to use', art: 'linear-gradient(140deg,#7C3AED,#3A1580)', state: 'NEW', stateInk: '#C9B4FF', holder: 'AHMED AL JANAHI', number: '•• 7742',
    limitLabel: '0 / 500.000 IQD', limitPct: '2%', limitNote: 'Online only · set a limit before first use',
    tx: [
      { ini: 'N', name: 'Netflix', sub: '8 Sep, 07:00 · iCASH · Completed', amt: '14.000', bg: '#D6455D' },
      { ini: 'S', name: 'Spotify', sub: '3 Sep, 07:00 · iCASH · Completed', amt: '9.000', bg: '#00A78F' },
      { ini: 'A', name: 'App Store', sub: '1 Sep, 21:12 · iCASH · Completed', amt: '6.500', bg: '#6B7280' },
    ] },
];
const WIDGETS = [
  { id: 'spend', group: 'YOUR MONEY', ini: 'SP', name: 'Spend this month', sub: 'Card and wallet spending', value: '486.200', meta: '+8% vs August', metaInk: '#D6455D', bg: '#2563EB' },
  { id: 'wealth', group: 'YOUR MONEY', ini: 'TW', name: 'Total wealth', sub: 'Accounts, invest and vaults', value: '3.632.400', meta: '+2,4% this month', metaInk: '#00A78F', bg: '#0D1B2A' },
  { id: 'week', group: 'YOUR MONEY', ini: 'WK', name: 'Spent this week', sub: 'Card spending by day', value: '248.000', meta: '−12% vs last week', metaInk: '#00A78F', bg: '#2563EB',
    bars: [38, 62, 30, 84, 46, 70, 96] },
  { id: 'vault', group: 'YOUR MONEY', ini: 'SV', name: 'Savings vault', sub: '4,2% a year', value: '85.000', meta: 'Round-ups on', metaInk: '#00A78F', bg: '#6B7280' },
  { id: 'card', group: 'YOUR MONEY', ini: 'CD', name: 'Card', sub: 'Standard · 9169', value: '9169', meta: 'Active', metaInk: '#00A78F', bg: '#1B3FA8' },
  { id: 'budget', group: 'BUDGET', ini: 'BG', name: 'Your budget', sub: 'Target, alerts and pace', value: '1.800.000', meta: '27% used', metaInk: '#8A95A2', bg: '#00A78F', progress: '27%', opens: 'budget' },
  { id: 'left', group: 'BUDGET', ini: 'LF', name: 'Left to spend', sub: 'Against your monthly budget', value: '1.313.800', meta: '9 days left', metaInk: '#8A95A2', bg: '#0D1B2A', progress: '27%', opens: 'budget' },
  { id: 'miles', group: 'FROM 360', ini: 'MI', name: 'iCASH Miles', sub: 'Earned on every payment', value: '18.420', meta: '1.240 added this month', metaInk: '#00A78F', bg: '#7C3AED', go: 'Miles' },
  { id: 'topups', group: 'FROM 360', ini: 'TU', name: 'Top-ups', sub: 'Zain Cash, Asiacell, Korek', value: '25.000', meta: 'Asiacell due in 4 days', metaInk: '#8A95A2', bg: '#00C2A8', go: 'Top-ups' },
  { id: 'bnpl', group: 'FROM 360', ini: 'BN', name: 'Pay later', sub: 'Instalments in progress', value: '360.500', meta: '3 payments left', metaInk: '#8A95A2', bg: '#EC7E00', go: 'BNPL' },
  { id: 'gaming', group: 'FROM 360', ini: 'GM', name: 'Gaming credit', sub: 'PS, Xbox, Steam', value: '2 codes', meta: 'Ready to use', metaInk: '#8A95A2', bg: '#1B3FA8', go: 'Gaming' },
  { id: 'hotels', group: 'FROM 360', ini: 'HT', name: 'Hotels', sub: 'Stays in Iraq and abroad', value: '10%', meta: 'cashback on stays', metaInk: '#00A78F', bg: '#7C3AED', go: 'Hotels' },
  { id: 'esim', group: 'FROM 360', ini: 'ES', name: 'eSIM', sub: 'Global data in minutes', value: '3 GB', meta: 'included this month', metaInk: '#8A95A2', bg: '#2563EB', go: 'Discover' },
  { id: 'lounges', group: 'FROM 360', ini: 'LO', name: 'Lounges', sub: 'Airport lounge passes', value: '2 left', meta: 'of 4 this month', metaInk: '#8A95A2', bg: '#00C2A8', go: 'Discover' },
];
const NAV = [
  ['home', 'Home'],
  ['invest', 'Invest'],
  ['transfers', 'Transfers'],
  ['lifestyle', '360'],
];
const ICON = {
  // iCASH mark: dot over stem
  home: "M12 3.2a2.3 2.3 0 1 1 0 4.6 2.3 2.3 0 0 1 0-4.6zm-1.7 6.4h3.4v11.2h-3.4z",
  cards: "M 0 2.5 C 0 1.119 1.119 0 2.5 0 L 17.5 0 C 18.881 0 20 1.119 20 2.5 L 20 3 L 0 3 L 0 2.5 Z M 0 5 L 20 5 L 20 11.5 C 20 12.881 18.881 14 17.5 14 L 2.5 14 C 1.119 14 0 12.881 0 11.5 L 0 5 Z M 3 10 C 2.448 10 2 10.448 2 11 C 2 11.552 2.448 12 3 12 L 11 12 C 11.552 12 12 11.552 12 11 C 12 10.448 11.552 10 11 10 L 3 10 Z",
  invest: "M2.4 2.4a1.2 1.2 0 0 0-2.4 0v11.6a3 3 0 0 0 3 3h15.3a1.2 1.2 0 0 0 0-2.4H3a.6.6 0 0 1-.6-.6zM17.6 5.3a1.2 1.2 0 1 1 1.7 1.7l-4.5 4.5a1.2 1.2 0 0 1-1.7 0l-2.4-2.4-3.3 3.3a1.2 1.2 0 1 1-1.7-1.7l4.2-4.1a1.2 1.2 0 0 1 1.7 0l2.4 2.4z",
  transfers: "M7.5 2.8h6.4V1.5c0-1.4 1-1.9 2.1-1L19.5 3.2c.7.6.7 1.6 0 2.2L16 8c-1 .8-2.1.4-2.1-1V5.8H7.5a1.2 1.2 0 0 1 0-3zM12.9 13.5H6.2v-1.3c0-1.4-.9-1.9-1.9-1L.5 14c-.7.5-.7 1.5 0 2.1l3.8 2.7c1 .8 1.9.3 1.9-1v-1.3h6.7a1.2 1.2 0 0 0 0-3z",
  lifestyle: "M22.34,12.09 A11,5.6 0 1 0 22.34,15.91 L19.52,15.03 A8,3 0 1 1 19.52,12.97 Z M19.0,12.4 L23.6,12.4 L21.0,8.0 Z",
};
const VB = { home: '0 0 24 24', cards: '0 0 20 14', invest: '0 0 19.5 17.1', transfers: '0 0 20 19.4', lifestyle: '0 0 24 24' };

const STK_META = {
  BBOB: ['Bank of Baghdad', 'Commercial bank', '0,650'],
  TASC: ['Asiacell Communications', 'Mobile network', '8,120'],
  IBSD: ['Baghdad Soft Drinks', 'Beverages', '3,450'],
  BCOI: ['Commercial Bank of Iraq', 'Commercial bank', '0,410'],
  INCP: ['Iraqi Carton Manufacturies', 'Packaging', '1,180'],
  HBAY: ['Al-Hilal Industries', 'Industrial goods', '0,930'],
  BIME: ['Iraqi Middle East Bank', 'Commercial bank', '0,270'],
  IKLV: ['Al-Kindi Veterinary', 'Pharmaceuticals', '2,040'],
  ISX60: ['ISX 60 Index Fund', 'Iraqi equity index', '12,400'],
  MENA: ['MENA Growth ETF', 'Regional equity', '18,750'],
  GULF: ['Gulf Banks ETF', 'Financials', '15,200'],
  GOLD: ['Gold Reserve ETF', 'Commodity', '41,600'],
  ENRG: ['Energy Basket ETF', 'Oil and gas', '9,850'],
  WRLD: ['World Equity ETF', 'Global equity', '27,300'],
  SUKK: ['Sovereign Sukuk Fund', 'Fixed income', '10,150'],
};
const STK_RANGES = ['1D', '1W', '1M', '6M', '1Y', '5Y'];
const NFC_D = 'M7.3 4.6a1.3 1.3 0 0 1 1.9 1.8 8.3 8.3 0 0 0 0 11.2 1.3 1.3 0 0 1-1.9 1.8 10.9 10.9 0 0 1 0-14.8zm3.8 3a1.3 1.3 0 0 1 1.9 1.8 4 4 0 0 0 0 5.2 1.3 1.3 0 0 1-1.9 1.8 6.6 6.6 0 0 1 0-8.8zm4 3.2a1.3 1.3 0 0 1 1.9 1.7 1.3 1.3 0 0 1-1.9 1.7 2.5 2.5 0 0 1 0-3.4z';
const QR_D = 'M3 3h7.4v7.4H3zm2 2v3.4h3.4V5zM13.6 3H21v7.4h-7.4zm2 2v3.4H19V5zM3 13.6h7.4V21H3zm2 2V19h3.4v-3.4zM13.6 13.6h3.2v3.2h-3.2zm5.2 0H21v2.1h-2.2zm-5.2 5.2h3.2V21h-3.2zm5.2 0H21V21h-2.2z';

function stkPoints(ticker, range, up) {
  let seed = 0;
  const key = String(ticker) + range;
  for (let i = 0; i < key.length; i++) seed = (seed * 31 + key.charCodeAt(i)) % 100000;
  const rnd = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
  const n = 64;
  const pts = [];
  let v = 0.5;
  for (let i = 0; i < n; i++) {
    const drift = (up ? 0.006 : -0.006) * (range === '1D' ? 0.6 : 1);
    v = Math.max(0.06, Math.min(0.94, v + (rnd() - 0.5) * 0.16 + drift));
    pts.push([(i / (n - 1)) * 320, 145 - v * 132]);
  }
  return pts;
}
function stkPath(pts) {
  return pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
}

function mask(name) {
  const svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='" + VB[name] + "'><path fill='#000' d='" + ICON[name] + "'/></svg>";
  // no ";utf8" and no shorthand tail: a ";" in an interpolated value truncates the declaration
  return 'url("data:image/svg+xml,' + encodeURIComponent(svg).replace(/'/g, '%27').replace(/"/g, '%22') + '")';
}

class Component extends DCLogic {
  state = { splash: true, locked: true, pin: '', wrong: false, tab: 'home', life: 'Discover', scroll: 0, frozen: false,
    editor: false, picks: ['spend', 'wealth', 'topups'], cardView: 'list', card: 0, toggles: {}, design: 0, promo: false,
    profile: false, plan: false, upgrade: false, tier: 'Gold', pick: 'Gold',
    onboard: true, step: 0, entry: '', uses: ['Transfers', 'Cards'],
    support: false, supOpen: null, budget: 1800000, budgetOn: true, budgetAlert: 80, budgetSheet: false, light: false,
    linked: false, lkAdd: false, lkStep: 0, lkProv: null, lkDigits: '', lkCode: '', payFrom: 'wallet',
    lkCards: [{ key: 'qi', last4: '4417' }] };

  // how far the tab's coloured header reaches; below it the status bar sits on light chrome
  openStock(p) {
    this.setState({ stock: { ticker: p.ticker, mark: p.mark, bg: p.bg, chg: p.chg, chgInk: p.chgInk }, stkRange: '1D', stkTab: 'Overview' });
  }

  linkedVals() {
    const s = this.state;
    const cards = s.lkCards || [];
    const prov = (k) => LK_PROVIDERS.filter(p => p.key === k)[0] || LK_PROVIDERS[0];
    const active = s.payFrom === 'wallet' ? null : cards.filter(c => c.key + c.last4 === s.payFrom)[0];
    const walletArt = 'linear-gradient(135deg,#2563EB,#0B1430)';
    const digits = s.lkDigits || '';
    const card16 = digits.slice(0, 16);
    const exp = digits.slice(16, 20);
    const step = s.lkStep || 0;
    const p = s.lkProv ? prov(s.lkProv) : LK_PROVIDERS[0];
    const last4 = card16.length === 16 ? card16.slice(12) : '••••';

    const grouped = (() => {
      const out = [];
      for (let i = 0; i < 16; i++) out.push(i < card16.length ? card16.charAt(i) : '•');
      return out.slice(0, 4).join('') + ' ' + out.slice(4, 8).join('') + ' ' + out.slice(8, 12).join('') + ' ' + out.slice(12).join('');
    })();

    const goStep = (n) => this.setState({ lkStep: n });
    const finish = () => {
      const entry = { key: p.key, last4: last4 };
      this.setState({ lkCards: cards.concat([entry]), lkStep: 4 });
    };

    return {
      lkDisplay: s.linked ? 'flex' : 'none',
      lkOpen: () => this.setState({ accounts: false, linked: true }),
      lkClose: () => this.setState({ linked: false }),
      lkEntrySub: cards.length
        ? cards.length + (cards.length === 1 ? ' card · paying from ' : ' cards · paying from ') + (active ? prov(active.key).name : 'iCASH balance')
        : 'Link Qi Card, Zain Cash and more',

      lkActiveArt: active ? prov(active.key).art : walletArt,
      lkActiveName: active ? prov(active.key).name : 'iCASH balance',
      lkActiveNumber: active ? '•••• •••• •••• ' + active.last4 : '•••• •••• •••• 9169',
      lkActiveKind: active ? 'LINKED' : 'ICASH WALLET',
      lkActiveMetaLabel: active ? 'EXPIRES' : 'BALANCE',
      lkActiveMeta: active ? '09/29' : '2.450.000',
      lkActiveNote: active
        ? 'Your iCASH card charges this source at the till. ' + prov(active.key).fee + '.'
        : 'Your iCASH card spends your wallet balance. Pick a linked card to route payments to it instead.',
      lkTopUpDisplay: active ? 'block' : 'none',
      lkTopUp: () => this.setState({
        linked: false, add: true,
        addMethod: prov(active.key).name + ' ·· ' + active.last4 + ' · IQD',
        addMethodArt: prov(active.key).art,
      }),

      lkSources: [{ name: 'iCASH balance', sub: 'Wallet · 2.450.000 IQD', art: walletArt, id: 'wallet' }]
        .concat(cards.map(c => ({
          name: prov(c.key).name, sub: '·· ' + c.last4 + ' · ' + prov(c.key).fee, art: prov(c.key).art, id: c.key + c.last4,
        })))
        .map(src => {
          const on = (s.payFrom || 'wallet') === src.id;
          return Object.assign({}, src, {
            mark: on ? '✓' : '',
            ringBg: on ? this.accent : 'transparent',
            ringBorder: on ? this.accent : 'rgba(255,255,255,.28)',
            pick: () => { this.setState({ payFrom: src.id }); this.toast('Paying from ' + src.name); },
          });
        }),

      lkRemoveDisplay: active ? 'block' : 'none',
      lkRemoveLabel: active ? 'Unlink ' + prov(active.key).name + ' ·· ' + active.last4 : '',
      lkRemove: () => {
        this.setState({ lkCards: cards.filter(c => c.key + c.last4 !== s.payFrom), payFrom: 'wallet' });
        this.toast(prov(active.key).name + ' unlinked');
      },

      lkAddDisplay: s.lkAdd ? 'flex' : 'none',
      lkAddOpen: () => this.setState({ lkAdd: true, lkStep: 0, lkProv: null, lkDigits: '', lkCode: '' }),
      lkAddBack: () => step === 0 || step === 4
        ? this.setState({ lkAdd: false })
        : this.setState({ lkStep: step === 3 ? 2 : step - 1 }),
      lkStepTitle: ['Add a card', 'Card details', 'Confirm it is you', 'Verifying', 'Card linked'][step],
      lkStepCount: step >= 3 ? '' : 'Step ' + (step + 1) + ' of 3',
      lkS0Display: step === 0 ? 'block' : 'none',
      lkS1Display: step === 1 ? 'block' : 'none',
      lkS2Display: step === 2 ? 'block' : 'none',
      lkS3Display: step === 3 ? 'flex' : 'none',
      lkS4Display: step === 4 ? 'flex' : 'none',

      lkProviders: LK_PROVIDERS.map(x => Object.assign({}, x, {
        pick: () => this.setState({ lkProv: x.key, lkStep: 1, lkDigits: '' }),
      })),
      lkProviderName: p.name,
      lkProviderArt: p.art,
      lkNumDisplay: grouped,
      lkExpDisplay: exp.length ? exp.slice(0, 2) + (exp.length > 2 ? '/' + exp.slice(2) : '') : 'MM/YY',

      lkCodeNote: 'We sent a four-digit code to +964 770 ··· 4567, registered with ' + p.name + '.',
      lkCodeBoxes: [0, 1, 2, 3].map(i => ({
        ch: (s.lkCode || '').charAt(i) || '',
        border: (s.lkCode || '').length === i ? this.accent : 'rgba(255,255,255,.1)',
      })),
      lkResend: () => this.toast('A new code is on its way'),

      lkPadDisplay: (step === 1 || step === 2) ? 'block' : 'none',
      lkKeys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫'].map(k => ({
        label: k,
        tap: () => {
          if (!k) return;
          if (step === 1) {
            const d = k === '⌫' ? digits.slice(0, -1) : (digits.length < 20 ? digits + k : digits);
            this.setState({ lkDigits: d });
          } else {
            const c = k === '⌫' ? (s.lkCode || '').slice(0, -1) : ((s.lkCode || '').length < 4 ? (s.lkCode || '') + k : s.lkCode);
            this.setState({ lkCode: c });
            if (c.length === 4) { goStep(3); setTimeout(finish, 1800); }
          }
        },
      })),

      lkPrimaryDisplay: (step === 1 || step === 2 || step === 4) ? 'block' : 'none',
      lkPrimaryLabel: step === 4 ? 'Make it my paying card' : (step === 2 ? 'Confirm' : 'Continue'),
      lkPrimaryBg: step === 1 && digits.length < 20 ? 'rgba(255,255,255,.1)' : (step === 2 && (s.lkCode || '').length < 4 ? 'rgba(255,255,255,.1)' : '#2563EB'),
      lkPrimaryInk: step === 1 && digits.length < 20 ? '#6E7986' : (step === 2 && (s.lkCode || '').length < 4 ? '#6E7986' : '#FFFFFF'),
      lkPrimary: () => {
        if (step === 1) { if (digits.length >= 20) goStep(2); return; }
        if (step === 2) { if ((s.lkCode || '').length === 4) { goStep(3); setTimeout(finish, 1800); } return; }
        const fresh = (this.state.lkCards || []).slice(-1)[0];
        if (fresh) this.setState({ payFrom: fresh.key + fresh.last4 });
        this.setState({ lkAdd: false });
        this.toast('Your iCASH card now pays from ' + p.name);
      },
      lkSecondaryDisplay: step === 4 ? 'block' : 'none',
      lkSecondaryLabel: 'Keep paying from my wallet',
      lkSecondary: () => this.setState({ lkAdd: false }),

      lkDoneTitle: p.name + ' ·· ' + ((this.state.lkCards || []).slice(-1)[0] || { last4: last4 }).last4 + ' linked',
      lkDoneFee: p.fee,
      lkDoneLimit: p.limit,
    };
  }

  budgetWidget(w) {
    const s = this.state;
    if (w.id !== 'budget' && w.id !== 'left') return {};
    if (!s.budgetOn) return w.id === 'budget'
      ? { value: 'Off', meta: 'Tap to set a target', progress: '0%' }
      : { value: '—', meta: 'No budget set', progress: '0%' };
    const pct = Math.min(100, Math.round((SPENT / s.budget) * 100));
    return w.id === 'budget'
      ? { value: iqd(s.budget), meta: pct + '% used', progress: pct + '%' }
      : { value: iqd(Math.max(0, s.budget - SPENT)), meta: '9 days left', progress: pct + '%' };
  }

  budgetVals() {
    const s = this.state;
    const pct = Math.min(100, Math.round((SPENT / s.budget) * 100));
    const over = pct >= s.budgetAlert;
    const step = (d) => () => this.setState(p => ({ budget: Math.min(12000000, Math.max(200000, p.budget + d)) }));
    return {
      bgtDisplay: s.budgetSheet ? 'block' : 'none',
      bgtClose: () => this.setState({ budgetSheet: false }),
      bgtAmount: iqd(s.budget),
      bgtDec: step(-100000),
      bgtInc: step(100000),
      bgtPresets: [1200000, 1500000, 1800000, 2400000].map(v => ({
        label: iqd(v),
        bg: s.budget === v ? '#FFFFFF' : 'rgba(255,255,255,.1)',
        ink: s.budget === v ? '#0D1B2A' : '#FFFFFF',
        pick: () => this.setState({ budget: v }),
      })),
      bgtSpentLabel: 'Spent ' + iqd(SPENT) + ' of ' + iqd(s.budget),
      bgtPctLabel: pct + '% used',
      bgtPctInk: over ? '#E8453C' : '#00A78F',
      bgtBarW: pct + '%',
      bgtLeftLabel: s.budgetOn
        ? iqd(Math.max(0, s.budget - SPENT)) + ' IQD left for the next 9 days · about ' + iqd(Math.round(Math.max(0, s.budget - SPENT) / 9 / 1000) * 1000) + ' a day'
        : 'No budget is active. Save to switch it on.',
      bgtAlertNote: 'A notification at ' + s.budgetAlert + '% of ' + iqd(s.budget) + ' IQD, and again when you pass the target.',
      bgtAlerts: [70, 80, 90].map(v => ({
        label: v + '%',
        bg: s.budgetAlert === v ? '#FFFFFF' : 'rgba(255,255,255,.1)',
        ink: s.budgetAlert === v ? '#0D1B2A' : '#FFFFFF',
        pick: () => this.setState({ budgetAlert: v }),
      })),
      bgtSaveLabel: s.budgetOn ? 'Save budget' : 'Set this budget',
      bgtSave: () => { this.setState({ budgetSheet: false, budgetOn: true }); this.toast('Budget set to ' + iqd(this.state.budget) + ' IQD a month'); },
      bgtRemoveDisplay: s.budgetOn ? 'block' : 'none',
      bgtRemove: () => { this.setState({ budgetSheet: false, budgetOn: false }); this.toast('Monthly budget removed'); },
    };
  }

  headerDepth() { return { home: 500, invest: 300, cards: 230, transfers: 0, lifestyle: 0 }[this.state.tab] || 0; }

  get accent() { return this.props.accent || '#2563EB'; }

  componentDidMount() {
    this.marks = {};
    setTimeout(() => this.setState({ splash: false }), 3400);
    if (this.props.startLocked === false) this.setState({ locked: false });
    import('./components/fig-patch.js').then(m => { this.figPatch = m.figPatch; this.tick(); });
  }

  // the materialized Figma frame needs its dropped bitmaps re-linked, then rebranding
  tick() {
    if (this.figPatch) { try { this.figPatch(this.marks); } catch (e) { console.log('[patch]', e.message); } }
    this.rebrand();
    if ((this.ticks = (this.ticks || 0) + 1) < 200) setTimeout(() => this.tick(), 150);
  }

  rebrand() {
    const spans = [...document.querySelectorAll('span')];
    const set = (from, to) => { const s = spans.find(x => x.textContent.trim() === from); if (s) s.textContent = to; };
    // the IQD amount is wider than the kit's "0,01 €" box, so recentre both lines
    const centre = (el, size) => {
      el.style.left = '0px'; el.style.right = '0px'; el.style.width = 'auto';
      el.style.textAlign = 'center'; if (size) el.style.fontSize = size;
    };
    const amt = spans.find(x => x.textContent.trim() === '0,01 €');
    if (amt) { amt.textContent = '2.450.000 IQD'; centre(amt, '40px'); }
    const cur = spans.find(x => x.textContent.trim() === 'Main - EUR');
    if (cur) { cur.textContent = 'Main · IQD'; centre(cur); }
    // euro amounts become IQD, and the kit's placeholder people become Iraqi names
    const NAMES = { 'To Marvilo': 'To Ahmed', 'Marvilo': 'Ahmed', 'Dylan E.': 'Saad A.', 'Dylan': 'Saad', 'Mario': 'Hayder', 'Louis': 'Ahmed', 'M': 'A', 'L': 'H' };
    spans.forEach(x => {
      if (x.children.length) return;
      const t = x.textContent;
      if (NAMES[t.trim()] !== undefined && !x.dataset.icash) { x.dataset.icash = '1'; x.textContent = NAMES[t.trim()]; return; }
      if (t.indexOf('€') >= 0 && !x.dataset.icash) {
        x.dataset.icash = '1';
        x.textContent = t.replace(/€\s?([\d.,]+)/g, (m, n) => {
          // "27.19" is a decimal euro amount; "1.200" is a thousands group
          const dec = /^\d+[.,]\d{2}$/.test(n);
          const v = Math.round(parseFloat(dec ? n.replace(',', '.') : n.replace(/[.,]/g, '')) * 1000);
          return v.toLocaleString('de-DE') + ' IQD';
        }).replace(/([\d.]+)\s?€/g, (m, n) => (parseFloat(n.replace(/\./g, '')) * 1000).toLocaleString('de-DE') + ' IQD');
      }
    });

    // the kit's fixed widget carousel is replaced by the editable iCASH strip
    const spend = spans.find(x => x.textContent.trim() === 'Spend this month');
    const strip = document.querySelector('[data-icash-widgets]');
    if (spend && strip && !strip.dataset.placed) {
      let row = spend;
      for (let i = 0; i < 6 && row; i++) {
        row = row.parentElement;
        if (row && row.scrollWidth > row.clientWidth + 40 && row.getBoundingClientRect().height > 150) break;
      }
      if (row && row.parentElement) {
        row.style.display = 'none';
        row.parentElement.insertBefore(strip, row);
        strip.style.display = 'block';
        strip.dataset.placed = '1';
      }
    }

    const crypto = spans.find(x => x.textContent.trim() === 'Crypto');
    if (crypto) {
      let n = crypto;
      for (let i = 0; i < 5 && n; i++) {
        n = n.parentElement;
        const h = n ? Math.round(n.getBoundingClientRect().height) : 0;
        if (h >= 70 && h <= 78) { n.style.display = 'none'; break; }
      }
    }

    // the card button in the kit's header is the way into Cards
    const hdr = [...document.querySelectorAll('div')].find(x => /left: 16px; top: 56px/.test(x.getAttribute('style') || ''));
    const cardBtn = hdr && hdr.children[3];
    if (cardBtn && !cardBtn.dataset.icash) {
      cardBtn.dataset.icash = '1';
      cardBtn.style.cursor = 'pointer';
      cardBtn.addEventListener('click', () => this.setState({ tab: 'cards', scroll: 0 }));
    }

    // hero: the kit's purple artwork becomes the iCASH gradient
    const hero = document.querySelector('[class^="fig-asset-a887a998"]');
    if (hero && !hero.dataset.icash) {
      hero.dataset.icash = '1';
      hero.style.background = 'linear-gradient(160deg,' + this.accent + ' 0%, #1B3FA8 52%, #0D1B2A 100%)';
    }

    // the kit's own tab bar is replaced by the iCASH one below the scroll area
    const kitNav = spans.find(x => x.textContent.trim() === 'Lifestyle' && x.closest('div[style*="2325"]'));
    const navRoot = kitNav ? kitNav.closest('div[style*="position: absolute"][style*="425"]') : null;
    if (navRoot) navRoot.style.display = 'none';
    document.querySelectorAll('div,span,svg').forEach(el => {
      const st = el.getAttribute('style') || '';
      if (/rgb\(6, ?102, ?235\)|rgb\(10, ?132, ?255\)|rgb\(11, ?132, ?255\)/.test(st)) {
        el.setAttribute('style', st.replace(/rgb\(6, ?102, ?235\)/g, this.accent).replace(/rgb\(1[01], ?132, ?255\)/g, this.accent));
      }
    });

  }

  toast(m) {
    this.setState({ toast: m });
    clearTimeout(this._tT);
    this._tT = setTimeout(() => this.setState({ toast: null }), 1900);
  }

  openOrder(side, p) {
    this.setState({ trade: false, stock: null, order: Object.assign({ side: side }, p), odSize: '25%' });
  }

  openBuy(name) {
    this.setState({ buy: name, byPick: 0 });
  }

  setLang(l) {
    this.setState({ lang: l });
    this.toast(l === 'ar' ? 'تم تغيير اللغة إلى العربية' : 'Language set to English');
    clearInterval(this._langT);
    if (l === 'ar' || this.state.light) this._langT = setInterval(() => this.syncSkin(), 400);
    else setTimeout(() => this.syncSkin(), 30);
  }

  syncLang() { this.syncSkin(); }

  setTheme(key) { this.setState({ theme: key }); }

  setLight(on) {
    this.setState({ light: on });
    this.toast(on ? 'Light appearance on' : 'Dark appearance on');
    clearInterval(this._langT);
    if (on || this.state.lang === 'ar') this._langT = setInterval(() => this.syncSkin(), 400);
    else setTimeout(() => this.syncSkin(), 30);
  }

  // language and theme both rewrite authored inline styles, so they run as one pass
  syncSkin() {
    const root = document.querySelector('[data-icash-phone]');
    if (!root) return;
    const ar = this.state.lang === 'ar';
    const lt = !!this.state.light;
    if (ar) root.setAttribute('dir', 'rtl'); else root.removeAttribute('dir');
    const els = [root].concat([].slice.call(root.querySelectorAll('*')));
    if (!ar && !lt) {
      if (this._skinOn) els.forEach(el => {
        if (el.dataset && el.dataset.skinCss !== undefined) { el.setAttribute('style', el.dataset.skinCss); delete el.dataset.skinCss; delete el.dataset.skinOut; delete el.dataset.surf; }
      });
      if (this._arOn) this.untranslate();
      this._skinOn = false; this._arOn = false;
      return;
    }
    els.forEach(el => {
      if (!el.dataset) return;
      const live = el.getAttribute('style') || '';
      if (live !== el.dataset.skinOut) el.dataset.skinCss = live;     // a re-render wrote new authored CSS
      let s = el.dataset.skinCss || '';
      if (s) {
        if (lt) s = lightCss(el, s);
        if (ar) s = mirrorCss(s);
        if (s !== live) el.setAttribute('style', s);
        el.dataset.skinOut = s;
      } else if (lt) {
        el.dataset.surf = el.parentElement && el.parentElement.dataset ? (el.parentElement.dataset.surf || '') : '';
      }
    });
    if (ar) this.translate(root); else if (this._arOn) this.untranslate();
    this._skinOn = true; this._arOn = ar;
  }

  translate(root) {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    this._arNodes = this._arNodes || [];
    let n;
    while ((n = w.nextNode())) {
      if (n.__arDone) continue;
      const t = (n.nodeValue || '').trim();
      if (!t || t.length > 400) { n.__arDone = 1; continue; }
      let out = AR[t];
      if (!out) for (const [rx, fn] of AR_RX) { const m = t.match(rx); if (m) { out = fn.apply(null, m); break; } }
      if (!out && /\s·\s|\.\s/.test(t)) {
        const parts = t.split(/(\s·\s|\.\s)/);
        let hit = false;
        const done = parts.map(p => {
          if (/^(\s·\s|\.\s)$/.test(p)) return p;
          const k = p.trim();
          let v = AR[k];
          if (!v) for (const [rx, fn] of AR_RX) { const m = k.match(rx); if (m) { v = fn.apply(null, m); break; } }
          if (v) { hit = true; return p.replace(k, v); }
          return p;
        });
        if (hit) out = done.join('');
      }
      n.__arDone = 1;
      if (out && out !== t) { this._arNodes.push([n, n.nodeValue]); n.nodeValue = n.nodeValue.replace(t, out); }
    }
  }

  untranslate() {
    (this._arNodes || []).forEach(([n, v]) => { try { n.nodeValue = v; n.__arDone = 0; } catch (e) {} });
    this._arNodes = [];
    const root = document.querySelector('[data-icash-phone]');
    if (root) {
      const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let n; while ((n = w.nextNode())) n.__arDone = 0;
    }
  }

  spaceBalanceNoop() {}

  componentDidUpdate() { if (this.state.lang === 'ar' || this.state.light || this._skinOn) this.syncSkin(); }

  spaceBalance() {
    const root = document.querySelector('[data-icash-home]');
    if (!root) return;
    const nodes = [...root.querySelectorAll('div,span')].filter(e => !e.children.length);
    const label = nodes.find(e => /Main · IQD/.test(e.textContent));
    const bal = nodes.find(e => /2\.450\.000/.test(e.textContent));
    if (label && bal && label.style.top && bal.style.top) {
      const t = parseFloat(label.style.top) + parseFloat(label.style.height || 16) + 14;
      if (Math.abs(parseFloat(bal.style.top) - t) > 1) bal.style.top = t + 'px';
    }
  }

  darkenHome() {
    const root = document.querySelector('[data-icash-home]');
    if (!root) return;
    const BG = {
      'rgb(247, 247, 247)': '#0A1420', 'rgb(255, 255, 255)': '#111F31',
      'rgb(242, 243, 245)': 'rgba(255,255,255,.07)', 'rgb(240, 242, 245)': 'rgba(255,255,255,.08)',
      'rgb(237, 239, 242)': 'rgba(255,255,255,.12)', 'rgb(236, 238, 241)': 'rgba(255,255,255,.08)',
      'rgb(245, 245, 245)': '#111F31', 'rgb(250, 250, 250)': '#111F31', 'rgb(244, 246, 248)': '#0A1420',
    };
    const FG = {
      'rgb(25, 28, 31)': '#FFFFFF', 'rgb(0, 0, 0)': '#FFFFFF', 'rgb(13, 27, 42)': '#FFFFFF',
      'rgb(26, 26, 26)': '#FFFFFF', 'rgb(17, 17, 17)': '#FFFFFF',
      'rgb(117, 128, 138)': '#8A95A2', 'rgb(154, 163, 173)': '#8A95A2', 'rgb(107, 114, 128)': '#8A95A2',
    };
    const ink = ['#191C1F', '#000000', '#000', 'black', 'rgb(0, 0, 0)', 'rgb(25, 28, 31)'];
    [root, ...root.querySelectorAll('*')].forEach(el => {
      if (el.dataset && el.dataset.icashDark === '1') return;
      const b = el.style && el.style.backgroundColor;
      if (b && BG[b]) el.style.backgroundColor = BG[b];
      const c = el.style && el.style.color;
      if (c && FG[c]) el.style.color = FG[c];
      else if (c) {
        const m = c.match(/rgb\((\d+), (\d+), (\d+)\)/);
        if (m) {
          const lum = (0.2126 * m[1] + 0.7152 * m[2] + 0.0722 * m[3]) / 255;
          if (lum < 0.18) el.style.color = '#FFFFFF';
          else if (lum < 0.45) el.style.color = '#8A95A2';
        }
      }
      const bc = el.style && el.style.borderColor;
      if (bc && (BG[bc] || /rgb\(2[23][0-9], ?2[23][0-9]/.test(bc))) el.style.borderColor = 'rgba(255,255,255,.08)';
      const f = el.getAttribute && el.getAttribute('fill');
      if (f && ink.indexOf(f.toLowerCase()) > -1) el.setAttribute('fill', '#FFFFFF');
    });
  }

  press(k) {
    if (k === 'del') { this.setState(s => ({ pin: s.pin.slice(0, -1), wrong: false })); return; }
    if (k === 'bio') { this.setState({ pin: PIN, wrong: false }); setTimeout(() => this.setState({ locked: false, pin: '' }), 260); return; }
    this.setState(s => {
      const pin = (s.pin + k).slice(0, 4);
      if (pin.length === 4) {
        setTimeout(() => {
          if (pin === PIN) this.setState({ locked: false, pin: '' });
          else this.setState({ wrong: true, pin: '' });
        }, 220);
      }
      return { pin, wrong: false };
    });
  }

  renderVals() {
    const s = this.state;
    const THEMES = {
      midnight: [[37, 99, 235, .42], [0, 194, 168, .14], [0, 194, 168, .36], [37, 99, 235, .20], [124, 58, 237, .34], [37, 99, 235, .20], [236, 126, 0, .30], [124, 58, 237, .26]],
      signal: [[37, 99, 235, .52], [59, 130, 246, .22], [37, 99, 235, .44], [59, 130, 246, .24], [37, 99, 235, .40], [96, 165, 250, .22], [37, 99, 235, .36], [59, 130, 246, .24]],
      tigris: [[0, 194, 168, .46], [45, 212, 191, .20], [0, 194, 168, .44], [45, 212, 191, .24], [0, 194, 168, .36], [56, 189, 248, .22], [0, 194, 168, .34], [236, 126, 0, .20]],
      souk: [[236, 126, 0, .44], [244, 63, 94, .18], [251, 146, 60, .38], [236, 126, 0, .22], [217, 119, 6, .38], [245, 158, 11, .22], [236, 126, 0, .34], [190, 24, 93, .18]],
      dusk: [[124, 58, 237, .48], [236, 72, 153, .20], [139, 92, 246, .40], [124, 58, 237, .24], [167, 139, 250, .34], [236, 72, 153, .22], [124, 58, 237, .36], [59, 130, 246, .20]],
      grove: [[16, 122, 87, .46], [132, 204, 22, .18], [5, 150, 105, .40], [16, 122, 87, .22], [52, 211, 153, .30], [161, 98, 7, .20], [16, 122, 87, .34], [132, 204, 22, .16]],
      light: [[37, 99, 235, .14], [0, 194, 168, .07], [0, 194, 168, .12], [37, 99, 235, .07], [124, 58, 237, .11], [37, 99, 235, .07], [236, 126, 0, .10], [124, 58, 237, .08]],
    };
    const pal = THEMES[s.light ? 'light' : (s.theme || 'midnight')];
    const rgba = (c) => 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + c[3] + ')';
    const wash = (i) => 'radial-gradient(115% 62% at 80% -6%,' + rgba(pal[i * 2]) + ' 0%,rgba(5,10,16,0) 58%),'
      + 'radial-gradient(88% 46% at 11% 2%,' + rgba(pal[i * 2 + 1]) + ' 0%,rgba(5,10,16,0) 62%),#050A10';
    const show = (v) => (v ? 'block' : 'none');

    return {
      splashDisplay: s.splash ? 'flex' : 'none',
      splashSkip: () => this.setState({ splash: false }),
      lockDisplay: s.locked ? 'flex' : 'none',
      appDisplay: s.locked ? 'none' : 'flex',
      statusInk: '#FFFFFF',
      onScroll: (e) => { const y = e.target.scrollTop; if (Math.abs(y - s.scroll) > 12) this.setState({ scroll: y }); },
      indicatorBg: 'rgba(255,255,255,.7)',

      pinPrompt: s.wrong ? 'Wrong PIN, try again' : 'Enter your passcode',
      pinInk: s.wrong ? '#FF8A8A' : '#9AA5B4',
      shake: s.wrong ? 'icShake .4s ease' : 'none',
      pinDots: [0, 1, 2, 3].map(i => ({
        bg: i < s.pin.length ? this.accent : 'transparent',
        border: i < s.pin.length ? this.accent : 'rgba(255,255,255,.35)',
      })),
      keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'bio', '0', 'del'].map(k => ({
        label: k === 'del' ? '⌫' : (k === 'bio' ? '☺' : k),
        bg: k === 'bio' || k === 'del' ? 'transparent' : 'rgba(255,255,255,.09)',
        press: () => this.press(k),
      })),

      tabs: NAV.map(([id, name]) => ({
        label: name,
        mask: mask(id),
        ink: s.tab === id ? this.accent : '#8A95A2',
        pick: () => this.setState({ tab: id, scroll: 0 }),
      })),
      homeDisplay: show(s.tab === 'home'),
      cardsListDisplay: show(s.tab === 'cards' && s.cardView === 'list'),
      cardDetailDisplay: show(s.tab === 'cards' && s.cardView === 'detail'),
      cardNewDisplay: show(s.tab === 'cards' && s.cardView === 'new'),
      designName: DESIGNS[s.design].name,
      designSub: DESIGNS[s.design].sub,
      designs: DESIGNS.map((d, i) => ({
        art: d.art,
        tag: d.tag,
        scale: i === s.design ? 'scale(1)' : 'scale(.88)',
        dotW: i === s.design ? '18px' : '6px',
        dotBg: i === s.design ? '#FFFFFF' : 'rgba(255,255,255,.3)',
        pick: () => this.setState({ design: i }),
      })),
      designEdition: DESIGNS[s.design].name + ' edition',
      designTitle: DESIGNS[s.design].title,
      orderCard: () => this.setState({ cardView: 'detail', card: 2 }),
      investDisplay: show(s.tab === 'invest'),
      ...(() => {
        const st = s.stock;
        const blanks = { stkDisplay: 'none', stkHead: '', stkSector: '', stkMark: '', stkBg: 'transparent', stkPrice: '', stkChgInk: '#8A95A2', stkFillId: '#8A95A2', stkChgLine: '', stkSession: '', stkHigh: '', stkLow: '', stkLine: '', stkArea: '', stkStarInk: '#FFFFFF', stkStar: () => {}, stkClose: () => {}, stkTabs: [], stkRanges: [], stkStats: [], stkHoldValue: '', stkHoldShares: '', stkHoldPnl: '', stkBuy: () => this.toast('Buy order placed'), stkSell: () => {} };
        if (!st) return blanks;
        const meta = STK_META[st.ticker] || [st.ticker, 'Iraq Stock Exchange', '1,000'];
        const up = st.chgInk === '#3FD39F';
        const range = s.stkRange || '1D';
        const pts = stkPoints(st.ticker, range, up);
        const ys = pts.map(p => p[1]);
        const num = parseFloat(meta[2].replace(',', '.'));
        const span = num * 0.06;
        const fmt = v => v.toFixed(3).replace('.', ',');
        const pct = parseFloat(st.chg.replace(/[^0-9,]/g, '').replace(',', '.')) || 0;
        const mult = { '1D': 1, '1W': 3.4, '1M': 7.8, '6M': 19.5, '1Y': 31.2, '5Y': 74.6 }[range] || 1;
        const rPct = pct * mult;
        const shares = 40000 + st.ticker.length * 14000;
        return {
          stkDisplay: 'flex',
          stkClose: () => this.setState({ stock: null }),
          stkHead: st.ticker + ' \u00b7 ' + meta[0],
          stkSector: meta[1],
          stkMark: st.mark,
          stkBg: st.bg,
          stkPrice: meta[2],
          stkChgInk: st.chgInk,
          stkFillId: st.chgInk,
          stkChgLine: (up ? '+' : '\u2212') + fmt(num * rPct / 100) + '  ' + st.chg.replace(/[\d,]+/, rPct.toFixed(2).replace('.', ',')) + '  \u00b7  ' + range,
          stkSession: 'At close \u00b7 ISX \u00b7 14:00 Baghdad',
          stkHigh: fmt(num + span),
          stkLow: fmt(num - span),
          stkLine: stkPath(pts),
          stkArea: stkPath(pts) + ' L320 150 L0 150 Z',
          stkStarInk: s.stkStar ? '#F3C64B' : '#FFFFFF',
          stkStar: () => this.setState(p => ({ stkStar: !p.stkStar })),
          stkTabs: ['Overview', 'Financials', 'Order book'].map(l => ({
            label: l,
            bg: (s.stkTab || 'Overview') === l ? 'rgba(255,255,255,.14)' : 'transparent',
            ink: (s.stkTab || 'Overview') === l ? '#FFFFFF' : '#8A95A2',
            pick: () => this.setState({ stkTab: l }),
          })),
          stkRanges: STK_RANGES.map(r => ({
            label: r,
            bg: range === r ? 'rgba(255,255,255,.14)' : 'transparent',
            ink: range === r ? '#FFFFFF' : '#8A95A2',
            pick: () => this.setState({ stkRange: r }),
          })),
          stkStats: [
            { label: 'Open', value: fmt(num - span * 0.4) },
            { label: 'Day range', value: fmt(num - span) + ' \u2013 ' + fmt(num + span) },
            { label: 'Volume', value: (1.2 + st.ticker.length * 0.3).toFixed(1) + 'M shares' },
            { label: 'Market cap', value: (180 + st.ticker.length * 24) + 'B IQD' },
          ],
          stkHoldValue: Math.round(shares * num).toLocaleString('de-DE') + ' IQD',
          stkHoldShares: shares.toLocaleString('de-DE') + ' shares \u00b7 avg ' + fmt(num * 0.96),
          stkHoldPnl: (up ? '+' : '\u2212') + Math.round(shares * num * rPct / 100).toLocaleString('de-DE') + ' IQD',
          stkBuy: () => this.openOrder('buy', { ticker: st.ticker, mark: st.mark, bg: st.bg, chg: st.chg, chgInk: st.chgInk, sub: meta[0], price: meta[2] }),
          stkSell: () => this.openOrder('sell', { ticker: st.ticker, mark: st.mark, bg: st.bg, chg: st.chg, chgInk: st.chgInk, sub: meta[0], price: meta[2] }),
        };
      })(),
      transfersDisplay: show(s.tab === 'transfers'),
      lifestyleDisplay: show(s.tab === 'lifestyle'),

      widgets: s.picks.map(id => WIDGETS.find(w => w.id === id)).filter(Boolean).map(w => Object.assign({}, w, this.budgetWidget(w), {
        barsDisplay: w.bars ? 'flex' : 'none',
        progressDisplay: w.progress ? 'block' : 'none',
        bars: (w.bars || []).map((h, i) => ({ h: h + '%', bg: i === (w.bars || []).length - 1 ? '#2563EB' : '#D6DDE8' })),
        remove: (ev) => { if (ev && ev.stopPropagation) ev.stopPropagation(); this.setState(p => ({ picks: p.picks.filter(x => x !== w.id) })); },
        tap: w.opens === 'budget' ? () => this.setState({ budgetSheet: true })
          : w.go ? () => this.setState({ tab: 'lifestyle', life: w.go, scroll: 0 })
          : () => this.toast(w.name + ' · ' + w.value),
      })),
      widgetChoices: WIDGETS.map((w, i) => {
        const on = s.picks.indexOf(w.id) >= 0;
        return Object.assign({}, w, {
          headDisplay: (i === 0 || WIDGETS[i - 1].group !== w.group) ? 'block' : 'none',
          mark: on ? '✓' : '+',
          markBg: on ? this.accent : '#FFFFFF',
          markInk: on ? '#FFFFFF' : '#8A95A2',
          markBorder: on ? this.accent : '#D8DCE2',
          toggle: () => this.setState(p => ({ picks: on ? p.picks.filter(x => x !== w.id) : p.picks.concat([w.id]) })),
        });
      }),
      editorDisplay: s.editor ? 'block' : 'none',
      promoDisplay: s.promo ? 'flex' : 'none',
      openPromo: () => this.setState({ promo: true }),
      closePromo: () => this.setState({ promo: false }),
      openEditor: () => this.setState({ editor: true }),
      closeEditor: () => this.setState({ editor: false }),

      backHome: () => this.setState({ tab: 'home', scroll: 0, cardView: 'list' }),
      backToList: () => this.setState({ cardView: 'list', scroll: 0 }),
      addCard: () => this.setState({ cardView: 'new', scroll: 0 }),
      cardName: CARDS[s.card].name,
      cardStack: CARDS.map((c, i) => ({
        name: c.name,
        number: c.number,
        state: i === s.card && s.frozen ? 'FROZEN' : c.state,
        art: c.art,
        filter: i === s.card && s.frozen ? 'grayscale(1) brightness(1.1)' : 'none',
        select: () => this.setState(st => (st.card === i ? { cardDetails: true } : { card: i })),
      })),
      limitLabel: CARDS[s.card].limitLabel,
      limitPct: CARDS[s.card].limitPct,
      limitNote: CARDS[s.card].limitNote,
      cardToggles: [
        { key: 'online', name: 'Online payments', sub: 'Card can be used on websites' },
        { key: 'contactless', name: 'Contactless', sub: 'Tap to pay in shops' },
        { key: 'atm', name: 'ATM withdrawals', sub: 'Cash from any machine' },
      ].map(t => {
        const on = (s.toggles || {})[t.key] !== false;
        return Object.assign({}, t, {
          trackBg: on ? this.accent : '#D8DCE2',
          knob: on ? 'translateX(18px)' : 'translateX(0)',
          flip: () => this.setState(p => ({ toggles: Object.assign({}, p.toggles, { [t.key]: !on }) })),
        });
      }),
      cardList: CARDS.map((c, i) => ({
        name: c.name,
        meta: c.meta,
        art: c.art,
        state: i === 0 && s.frozen ? 'FROZEN' : c.state,
        stateInk: i === 0 && s.frozen ? '#8FB6FF' : c.stateInk,
        open: () => this.setState({ cardView: 'detail', card: i, scroll: 0 }),
      })),
      cardActions: [
        { icon: '◉', label: 'Show details', bg: 'rgba(255,255,255,.1)', mark: '#FFFFFF', tap: () => this.setState({ cardDetails: true }) },
        { icon: '❄', label: s.frozen ? 'Unfreeze' : 'Freeze', bg: s.frozen ? this.accent : 'rgba(255,255,255,.1)', mark: '#FFFFFF', tap: () => this.setState({ frozen: !s.frozen }) },
        { icon: '⚙', label: 'Settings', bg: 'rgba(255,255,255,.1)', mark: '#FFFFFF', tap: () => this.toast('Card settings are below') },
      ],
      homeWash: wash(0), investWash: wash(1), transfersWash: wash(2), lifestyleWash: wash(3),
      auroraA: 'rgba(' + pal[0][0] + ',' + pal[0][1] + ',' + pal[0][2] + ',' + Math.min(0.55, pal[0][3] + 0.14).toFixed(2) + ')',
      auroraB: 'rgba(' + pal[4][0] + ',' + pal[4][1] + ',' + pal[4][2] + ',' + Math.min(0.5, pal[4][3] + 0.1).toFixed(2) + ')',
      auroraSheen: 'rgba(' + pal[1][0] + ',' + pal[1][1] + ',' + pal[1][2] + ',0.16)',
      auroraLine: 'rgba(' + pal[1][0] + ',' + pal[1][1] + ',' + pal[1][2] + ',0.10)',
      auroraWave: 'rgba(' + pal[0][0] + ',' + pal[0][1] + ',' + pal[0][2] + ',0.16)',
      auroraWave2: 'rgba(' + pal[4][0] + ',' + pal[4][1] + ',' + pal[4][2] + ',0.13)',
      acctNumber: 'IQ98 ICSH 0085 0000 9169',
      copyAcct: () => {
        try { navigator.clipboard.writeText('IQ98 ICSH 0085 0000 9169'); } catch (e) {}
        this.setState({ copied: true });
        clearTimeout(this._cpT);
        this._cpT = setTimeout(() => this.setState({ copied: false }), 1800);
      },
      copyBg: s.copied ? '#FFFFFF' : 'rgba(255,255,255,.1)',
      copyIdleDisplay: s.copied ? 'none' : 'block',
      copyDoneDisplay: s.copied ? 'block' : 'none',
      copyLabel: s.copied ? 'Copied' : 'Copy',
      copyNote: s.copied ? 'Account number copied' : '',
      copyNoteOpacity: s.copied ? '1' : '0',
      qrCells: (() => {
        if (this._qr) return this._qr;
        const N = 25, on = [];
        let seed = 987654321;
        const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
        const finder = (r, c) => {
          const dr = Math.abs(r - 3), dc = Math.abs(c - 3);
          const d = Math.max(dr, dc);
          return d === 3 || d === 1 || d === 0;
        };
        for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
          let dark;
          if (r < 7 && c < 7) dark = finder(r, c);
          else if (r < 7 && c >= N - 7) dark = finder(r, c - (N - 7));
          else if (r >= N - 7 && c < 7) dark = finder(r - (N - 7), c);
          else if ((r < 8 && (c === 7 || c >= N - 8)) || (r === 7 && c < 8) || (r >= N - 8 && c < 8) || (r === N - 8 && c < 8)) dark = false;
          else if (r === 6 || c === 6) dark = (r + c) % 2 === 0;
          else if (r >= N - 9 && r <= N - 5 && c >= N - 9 && c <= N - 5) dark = Math.max(Math.abs(r - (N - 7)), Math.abs(c - (N - 7))) !== 1;
          else dark = rnd() > 0.48;
          on.push({ bg: dark ? '#0D1B2A' : '#ffffff' });
        }
        this._qr = on;
        return on;
      })(),
      qrPath: QR_D,
      qrDisplay: s.qr ? 'block' : 'none',
      qrClose: () => this.setState({ qr: false }),
      moreDisplay: s.more ? 'block' : 'none',
      moreClose: () => this.setState({ more: false }),
      moreItems: [
        { kind: 'convert', name: 'Convert', sub: 'Exchange IQD, USD, EUR and more', tap: () => this.setState({ more: false, conv: true }) },
        { kind: 'doc', name: 'Statements', sub: 'Download a PDF or CSV', tap: () => { this.setState({ more: false }); this.toast('Statement is being prepared'); } },
        { kind: 'loop', name: 'Standing orders', sub: 'Rent, bills and instalments', tap: () => { this.setState({ more: false }); this.toast('3 standing orders active'); } },
        { kind: 'star', name: 'Rewards', sub: 'Points, cashback and offers', tap: () => this.setState({ more: false, tab: 'lifestyle', scroll: 0 }) },
      ].map(m => Object.assign({}, m, {
        iconConvert: m.kind === 'convert' ? 'block' : 'none',
        iconDoc: m.kind === 'doc' ? 'block' : 'none',
        iconLoop: m.kind === 'loop' ? 'block' : 'none',
        iconStar: m.kind === 'star' ? 'block' : 'none',
      })),
      themeCurrent: ({ midnight: 'Midnight', signal: 'Signal blue', tigris: 'Tigris', souk: 'Amber souk', dusk: 'Violet dusk', grove: 'Date grove' })[s.theme || 'midnight'],
      themeOptions: [
        { name: 'Midnight', key: 'midnight', swatch: 'linear-gradient(150deg,#243B55 0%,#101A28 55%,#050A10 100%)', dot: '#7DA3D9' },
        { name: 'Signal blue', key: 'signal', swatch: 'linear-gradient(150deg,#3B82F6 0%,#1E40AF 52%,#0B1430 100%)', dot: '#BFDBFE' },
        { name: 'Tigris', key: 'tigris', swatch: 'linear-gradient(150deg,#2DD4BF 0%,#0F766E 52%,#04201F 100%)', dot: '#CCFBF1' },
        { name: 'Amber souk', key: 'souk', swatch: 'linear-gradient(150deg,#FB923C 0%,#C2410C 52%,#2A1005 100%)', dot: '#FED7AA' },
        { name: 'Violet dusk', key: 'dusk', swatch: 'linear-gradient(150deg,#A78BFA 0%,#6D28D9 48%,#EC4899 100%)', dot: '#EDE9FE' },
        { name: 'Date grove', key: 'grove', swatch: 'linear-gradient(150deg,#4ADE80 0%,#15803D 52%,#0A1F14 100%)', dot: '#DCFCE7' },
      ].map(t => ({
        name: t.name,
        swatch: t.swatch,
        dot: t.dot,
        bg: (s.theme || 'midnight') === t.key ? 'rgba(255,255,255,.08)' : 'transparent',
        border: (s.theme || 'midnight') === t.key ? '#FFFFFF' : 'rgba(255,255,255,.12)',
        ink: '#FFFFFF',
        pick: () => this.setTheme(t.key),
      })),
      cdDisplay: s.cardDetails ? 'flex' : 'none',
      cdClose: () => this.setState({ cardDetails: false }),
      cdGround: ['radial-gradient(120% 45% at 50% 0%,#1B34C9 0%,#0A1A7A 46%,#050A10 100%)',
        'radial-gradient(120% 45% at 50% 0%,#2563EB 0%,#10225C 46%,#050A10 100%)',
        'radial-gradient(120% 45% at 50% 0%,#7C3AED 0%,#2A1160 46%,#050A10 100%)'][s.card] || '#050A10',
      cdArt: CARDS[s.card].art,
      cdKind: ['Physical', 'Physical', 'Virtual'][s.card] || 'Virtual',
      cdNumber: ['4165 9816 5671 9169', '4165 9816 5671 2489', '4165 9816 5671 7742'][s.card],
      cdExpiry: ['06/28', '09/26', '12/29'][s.card],
      cdCvv: s.cdShown ? ['053', '412', '867'][s.card] : '•••',
      cdSubsCount: ['2 subscriptions', '1 subscription', '3 subscriptions'][s.card],
      cdSubsNext: ['Next payment on 18 Sep', 'Next payment on 1 Oct', 'Next payment on 11 Oct'][s.card],
      cdActions: [
        { icon: s.cdShown ? '◉' : '◎', label: s.cdShown ? 'Hide details' : 'Show details',
          bg: s.cdShown ? '#FFFFFF' : 'rgba(255,255,255,.12)', ink: s.cdShown ? '#0D1B2A' : '#FFFFFF',
          tap: () => this.setState(st => ({ cdShown: !st.cdShown })) },
        { icon: '❄', label: s.frozen ? 'Unfreeze' : 'Freeze',
          bg: s.frozen ? '#FFFFFF' : 'rgba(255,255,255,.12)', ink: s.frozen ? '#0D1B2A' : '#FFFFFF',
          tap: () => this.setState(st => ({ frozen: !st.frozen })) },
        { icon: '···', label: 'More', bg: 'rgba(255,255,255,.12)', ink: '#FFFFFF', tap: () => this.setState({ cardDetails: false, more: true }) },
      ],
      acctDisplay: s.accounts ? 'flex' : 'none',
      acctOpen: () => this.setState({ accounts: true }),
      acctClose: () => this.setState({ accounts: false }),
      acctTotal: '3.060.000',
      acctList: [
        { key: 'card', mark: '▤', name: 'Card account', sub: '·· 9169 · IQD', amt: '2.450.000', bg: 'linear-gradient(160deg,#2563EB,#10225C)' },
        { key: 'save', mark: '◈', name: 'Savings account', sub: '·· 4408 · IQD', amt: '610.000', bg: 'linear-gradient(160deg,#00C2A8,#0A3F38)' },
      ].map(a => Object.assign({}, a, {
        tickDisplay: (s.acct || 'card') === a.key ? 'flex' : 'none',
        pick: () => this.setState({ acct: a.key }),
      })),
      acctPockets: [
        { mark: '▣', name: 'Rent', sub: '', amt: '0', bg: '#3B82F6', subDisplay: 'none' },
        { mark: '✦', name: 'Points pocket', sub: 'Activate reward', amt: '0', bg: '#7C3AED', subDisplay: 'block' },
        { mark: '▣', name: 'Travel', sub: '', amt: '0', bg: '#3B82F6', subDisplay: 'none' },
      ],
      addDisplay: s.add ? 'flex' : 'none',
      addBalance: '2.450.000',
      addAmount: (() => {
        const raw = (s.addEntry || '').replace(/\D/g, '');
        if (!raw) return '0';
        return raw.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      })(),
      addFee: 'No fee',
      addEta: (s.addMethod || 'Rafidain Bank · IQD').indexOf('Regular') > -1 ? 'Within 1 working day' : 'Usually instantly',
      addMethodName: s.addMethod || 'Rafidain Bank · IQD',
      addMethodArt: s.addMethodArt || 'linear-gradient(135deg,#C8A45C,#8A6B26)',
      addClose: () => this.setState({ add: false, addSheet: false }),
      addClear: () => this.setState({ addEntry: '' }),
      addConfirm: () => {
        const raw = (s.addEntry || '').replace(/\D/g, '');
        const num = parseInt(raw || '0', 10);
        if (!num) return;
        this.setState({
          add: false, addSheet: false, addEntry: '',
          ok: { title: 'Money added', amount: num.toLocaleString('de-DE') + ' IQD',
            sub: 'Added to your Main account ·· 9169',
            rows: [['From', s.addMethod || 'Rafidain Bank · IQD'], ['Fee', 'No fee'], ['Arrives', 'Instantly']] },
        });
      },
      addOpenMethods: () => this.setState({ addSheet: true }),
      addCloseMethods: () => this.setState({ addSheet: false }),
      addSheetDisplay: s.addSheet ? 'block' : 'none',
      addKeys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫'].map(k => ({
        label: k,
        press: () => {
          if (!k) return;
          this.setState(st => ({ addEntry: k === '⌫' ? (st.addEntry || '').slice(0, -1) : ((st.addEntry || '') + k).slice(0, 9) }));
        },
      })),
      addSources: [
        { name: 'Rafidain Bank', sub: '·· 5703, 04/28', art: 'linear-gradient(135deg,#C8A45C,#8A6B26)' },
        { name: 'Bank of Baghdad', sub: '·· 5181, 11/30', art: 'linear-gradient(135deg,#E8453C,#8C1D2B)' },
        { name: 'Al Rasheed Bank', sub: '·· 2277, 12/28', art: 'linear-gradient(135deg,#2563EB,#10225C)' },
      ].map(x => {
        const label = x.name + ' · ' + (s.addCurrency || 'IQD');
        const on = (s.addMethod || 'Rafidain Bank · IQD') === label;
        return Object.assign({}, x, {
          rowBg: on ? 'rgba(37,99,235,.14)' : 'transparent',
          tickDisplay: on ? 'flex' : 'none',
          pick: () => this.setState({ addMethod: label, addMethodArt: x.art, addSheet: false }),
        });
      }),
      addMethods: [
        { icon: '▤', name: 'Debit or credit card', sub: 'Usually arrives instantly', art: 'linear-gradient(135deg,#4A4A4A,#1E1E1E)' },
        { icon: '→', name: 'From another iCASH wallet', sub: 'Ask anyone to send to your phone number or @tag', art: 'linear-gradient(135deg,#2563EB,#10225C)' },
        { icon: '◈', name: 'Cash at an iCASH agent', sub: 'Deposit cash at any partner agent across Iraq', art: 'linear-gradient(135deg,#EC7E00,#7A3E00)' },
        { icon: '▦', name: 'QR top-up', sub: 'Show your QR at an agent, kiosk or exchange office', art: 'linear-gradient(135deg,#7C3AED,#2A1160)' },
      ].map(m => {
        const label = m.name + ' · ' + (s.addCurrency || 'IQD');
        return Object.assign({}, m, {
          iconQrDisplay: m.name === 'QR top-up' ? 'block' : 'none',
          iconCharDisplay: m.name === 'QR top-up' ? 'none' : 'block',
          rowBg: (s.addMethod || '') === label ? 'rgba(37,99,235,.14)' : 'transparent',
          pick: () => this.setState(m.name === 'QR top-up'
            ? { addSheet: false, qr: true }
            : { addMethod: label, addMethodArt: m.art, addSheet: false }),
        });
      }),
      obDisplay: s.onboard ? 'flex' : 'none',
      obWelcomeDisplay: s.onboard && s.step === 0 ? 'flex' : 'none',
      obStepDisplay: s.onboard && s.step > 0 ? 'flex' : 'none',
      obProgress: Math.round((s.step / (OB.length - 1)) * 100) + '%',
      obTitle: (OB[s.step] || OB[0]).title,
      obSub: (OB[s.step] || OB[0]).sub,
      obCta: (OB[s.step] || OB[0]).cta,
      obAlt: (OB[s.step] || OB[0]).alt || '',
      obAltDisplay: (OB[s.step] || OB[0]).alt ? 'block' : 'none',
      obFieldsDisplay: (OB[s.step] || OB[0]).fields ? 'flex' : 'none',
      obFields: ((OB[s.step] || OB[0]).fields || []).map(x => ({ label: x[0], value: x[1], ink: x[2] ? '#FFFFFF' : '#5E6873' })),
      obCodeDisplay: (OB[s.step] || OB[0]).kind === 'code' ? 'flex' : 'none',
      obCells: [0, 1, 2, 3, 4, 5].map(i => ({
        ch: (s.entry || '')[i] || '',
        border: (s.entry || '').length === i ? '#2563EB' : 'rgba(255,255,255,.10)',
      })),
      obDotsDisplay: (OB[s.step] || OB[0]).kind === 'pass' ? 'flex' : 'none',
      obDots: [0, 1, 2, 3, 4, 5].map(i => ({ bg: i < (s.entry || '').length ? '#2563EB' : 'transparent' })),
      obPadDisplay: ['code', 'pass'].indexOf((OB[s.step] || OB[0]).kind) > -1 ? 'grid' : 'none',
      obKeys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫'].map(k => ({
        label: k,
        press: () => {
          if (!k) return;
          this.setState(st => ({ entry: k === '⌫' ? (st.entry || '').slice(0, -1) : ((st.entry || '') + k).slice(0, 6) }));
        },
      })),
      obScanDisplay: (OB[s.step] || OB[0]).kind === 'scan' ? 'flex' : 'none',
      obScanHint: (OB[s.step] || OB[0]).hint || '',
      obScanNote: (OB[s.step] || OB[0]).note || '',
      obChipsDisplay: (OB[s.step] || OB[0]).kind === 'chips' ? 'flex' : 'none',
      obChipGroups: (OB[s.step] || OB[0]).groups ? (OB[s.step] || OB[0]).groups.map(g => ({
        name: g[0],
        items: g[1].map(label => ({
          label,
          bg: (s.uses || []).indexOf(label) > -1 ? '#2563EB' : 'rgba(255,255,255,.08)',
          ink: '#FFFFFF',
          toggle: () => this.setState(st => {
            const u = st.uses || [];
            return { uses: u.indexOf(label) > -1 ? u.filter(x => x !== label) : u.concat([label]) };
          }),
        })),
      })) : [],
      obPlanDisplay: (OB[s.step] || OB[0]).kind === 'plan' ? 'flex' : 'none',
      obPlans: TIERS.map(t => ({
        name: t.name,
        price: t.price,
        sub: t.benefits[0].name + ' · ' + t.benefits[1].name,
        bg: (s.pick || 'Gold') === t.name ? 'rgba(37,99,235,.16)' : '#15191E',
        border: (s.pick || 'Gold') === t.name ? '#2563EB' : 'transparent',
        pick: () => this.setState({ pick: t.name }),
      })),
      obNext: () => this.setState(st => (st.step >= OB.length - 1
        ? { onboard: false, tier: st.pick || 'Gold', step: 0, entry: '' }
        : { step: st.step + 1, entry: '' })),
      obBack: () => this.setState(st => ({ step: Math.max(0, st.step - 1), entry: '' })),
      obSkip: () => this.setState({ onboard: false, step: 0, entry: '' }),
      planDisplay: s.plan ? 'block' : 'none',
      upgradeDisplay: s.upgrade ? 'flex' : 'none',
      openPlan: () => this.setState({ plan: true }),
      closePlan: () => this.setState({ plan: false }),
      openUpgrade: () => this.setState({ upgrade: true, pick: s.pick || (s.tier === 'Standard' ? 'Gold' : 'Ultra') }),
      closeUpgrade: () => this.setState({ upgrade: false }),
      joinTier: () => this.setState({ tier: s.pick || 'Gold', upgrade: false }),
      tierName: s.tier || 'Gold',
      tierRenews: (s.tier || 'Gold') === 'Standard' ? 'Free, forever' : 'Renews on 10 December',
      planActions: [
        { icon: '◍', label: 'Members' },
        { icon: '⌸', label: 'Gift plan' },
        { icon: '▤', label: 'Billing' },
        { icon: '☰', label: 'See plans' },
      ].map(a => Object.assign({}, a, {
        tap: a.label === 'See plans' ? () => this.setState({ upgrade: true }) : () => this.toast(a.label),
      })),
      planHighlights: [
        { slot: 'insurance photo — 232×168', name: 'Insurance', sub: 'Covered for travel and purchases' },
        { slot: 'card photo — 232×168', name: 'Exclusive card', sub: 'Brushed metal, only on this plan' },
        { slot: 'lounge photo — 232×168', name: 'Lounges', sub: 'Discounted airport lounge passes' },
      ].map(h => Object.assign({}, h, { tap: () => this.toast(h.name + ' · ' + h.sub) })),
      planGroups: [
        { name: 'Save on your spending', rows: [
          { icon: '▣', name: 'Fee-free ATM withdrawals', sub: '0 / 2.000.000 IQD withdrawn' },
          { icon: '⇄', name: 'Fee-free exchanges', sub: 'Unlimited' },
          { icon: '✦', name: 'iCASH points', sub: 'Up to 1 point for every 2.000 IQD spent' },
        ] },
        { name: 'Plan your wealth', rows: [
          { icon: '◎', name: 'Savings vault', sub: 'Up to 4,2% a year (variable)' },
          { icon: '◐', name: 'Flexible cash funds', sub: 'Up to 4,5% returns (variable)' },
          { icon: '↗', name: 'Commission-free trades', sub: '0 / 10 used this month' },
        ] },
        { name: 'Travel with ease', rows: [
          { icon: '⌾', name: 'Lounges', sub: 'Discounted · 35.000 IQD per pass' },
          { icon: '✈', name: 'Miles transfer', sub: 'Convert points to Iraqi Airways miles' },
          { icon: '▤', name: 'eSIM', sub: '3 GB of global data monthly included' },
        ] },
      ],
      planSubs: [
        { mark: 'CR', name: 'Careem Plus', bg: '#0F7A3D', ink: '#FFFFFF' },
        { mark: 'TCL', name: 'TCL Care', bg: '#0B49A6', ink: '#FFFFFF' },
        { mark: 'IM', name: 'Iraq Mall', bg: '#6B2F8C', ink: '#FFFFFF' },
        { mark: 'SH', name: 'SHEIN', bg: '#F0F2F5', ink: '#111111' },
        { mark: 'AP', name: 'App Store', bg: '#64748B', ink: '#FFFFFF' },
        { mark: 'GP', name: 'Google Play', bg: '#047857', ink: '#FFFFFF' },
      ].map(p => Object.assign({}, p, { tap: () => this.toast(p.name) })),
      tierChips: TIERS.map(t => ({
        label: t.name,
        bg: (s.pick || 'Gold') === t.name ? 'rgba(255,255,255,.12)' : 'transparent',
        border: (s.pick || 'Gold') === t.name ? 'rgba(255,255,255,.35)' : 'transparent',
        ink: (s.pick || 'Gold') === t.name ? '#FFFFFF' : '#8A95A2',
        pick: () => this.setState({ pick: t.name }),
      })),
      pickName: (TIERS.find(t => t.name === (s.pick || 'Gold')) || TIERS[1]).name,
      pickPrice: (TIERS.find(t => t.name === (s.pick || 'Gold')) || TIERS[1]).price,
      pickArt: (TIERS.find(t => t.name === (s.pick || 'Gold')) || TIERS[1]).art,
      pickBenefits: (TIERS.find(t => t.name === (s.pick || 'Gold')) || TIERS[1]).benefits,
      pickDiscount: (TIERS.find(t => t.name === (s.pick || 'Gold')) || TIERS[1]).discount,
      pickDiscountDisplay: (TIERS.find(t => t.name === (s.pick || 'Gold')) || TIERS[1]).discount ? 'block' : 'none',
      pickCta: (s.pick || 'Gold') === (s.tier || 'Gold') ? 'Your current plan' : 'Join ' + (s.pick || 'Gold'),
      profileDisplay: s.profile ? 'block' : 'none',
      openProfile: () => this.setState({ profile: true }),
      closeProfile: () => this.setState({ profile: false }),
      profileMenu: [
        { icon: '⇄', name: 'Language', sub: (s.lang === 'ar' ? 'العربية' : 'English'), badge: '', lang: 1, chev: 1 },
        { icon: '✦', name: 'Invite friends', sub: 'Earn 50.000 IQD or more', badge: '' },
        { icon: '◗', name: 'Chats', sub: '', badge: '20' },
        { icon: '◍', name: 'Personal info', sub: '', badge: '' },
        { icon: '▥', name: 'Account details', sub: '', badge: '' },
        { icon: '◈', name: 'Security', sub: '', badge: '' },
        { icon: '▤', name: 'Documents and statements', sub: '', badge: '' },
        { icon: '◉', name: 'FAQ', sub: '', badge: '' },
        { icon: '◎', name: 'Settings', sub: '', badge: '' },
      ].map(m => Object.assign({}, m, {
        subDisplay: m.sub ? 'block' : 'none',
        badgeDisplay: m.badge ? 'flex' : 'none',
        chevDisplay: m.chev ? 'block' : 'none',
        tap: m.lang ? () => this.setState({ langPick: true }) : () => this.toast(m.name),
      })),
      pointActions: [
        { icon: '+', label: 'Earn', tap: () => this.toast('Earn points on every payment') },
        { icon: '％', label: 'Redeem', tap: () => this.setState({ life: 'Miles', tab: 'lifestyle' }) },
        { icon: '✦', label: 'Plan perks', tap: () => this.setState({ plan: true }) },
        { icon: '···', label: 'More', tap: () => this.setState({ more: true }) },
      ],
      pointProducts: [
        { icon: '✈', name: 'Miles', tap: () => this.setState({ airline: true, airTab: 'Airlines' }) },
        { icon: '⌂', name: 'Stays', tap: () => this.setState({ stays: true }) },
        { icon: '▤', name: 'eSIM' },
        { icon: '⛨', name: 'Shops' },
        { icon: '⌸', name: 'Gift cards' },
        { icon: '⌾', name: 'Lounges' },
      ].map(p => Object.assign({ tap: () => this.openBuy(p.name) }, p)).concat([
        { icon: '✦', name: 'Pocket', tap: () => this.toast('Points pocket · 18.420 points ready to spend') },
        { icon: '▣', name: 'Digital goods', tap: () => this.openBuy('Digital goods') },
      ]),
      digitalGoods: [
        { mark: 'GC', name: 'Gift cards', bg: 'linear-gradient(160deg,#F472B6,#BE185D)', ink: '#FFFFFF' },
        { mark: 'GM', name: 'Gaming cards', bg: 'linear-gradient(160deg,#818CF8,#4338CA)', ink: '#FFFFFF' },
        { mark: 'PS', name: 'PlayStation', bg: 'linear-gradient(160deg,#3B82F6,#1E3A8A)', ink: '#FFFFFF' },
        { mark: 'ST', name: 'Steam', bg: 'linear-gradient(160deg,#334155,#0F172A)', ink: '#FFFFFF' },
        { mark: 'GP', name: 'Google Play', bg: 'linear-gradient(160deg,#34D399,#047857)', ink: '#0A1420' },
        { mark: 'AP', name: 'App Store', bg: 'linear-gradient(160deg,#64748B,#1E293B)', ink: '#FFFFFF' },
        { mark: 'TU', name: 'Top-ups', bg: 'linear-gradient(160deg,#FB923C,#C2410C)', ink: '#FFFFFF' },
        { mark: 'ES', name: 'eSIM', bg: 'linear-gradient(160deg,#22D3EE,#0E7490)', ink: '#0A1420' },
      ].map(g => Object.assign({}, g, { tap: () => this.openBuy(g.name) })),
      pointTx: [
        { ini: 'AS', bg: '#EC7E00', name: 'Asiacell top-up', sub: 'Yesterday, 12:11', pts: '+12,5 points' },
        { ini: 'CF', bg: '#2563EB', name: 'Ciao Cafe', sub: 'Yesterday, 16:30', pts: '+6,0 points' },
        { ini: 'MK', bg: '#00A78F', name: 'Al Rashid Market', sub: '11 Sep, 18:22', pts: '+19,2 points' },
      ].map(t => Object.assign({}, t, { tap: () => this.toast(t.name + ' · ' + t.pts) })),
      pointBrands: [
        { mark: 'CR', bg: '#0F7A3D', ink: '#FFFFFF', name: 'Careem' },
        { mark: 'TCL', bg: '#0B49A6', ink: '#FFFFFF', name: 'TCL' },
        { mark: 'AZ', bg: '#F0F2F5', ink: '#111111', name: 'Amazon' },
        { mark: 'AP', bg: '#F0F2F5', ink: '#111111', name: 'App Store' },
        { mark: 'SH', bg: '#F0F2F5', ink: '#111111', name: 'SHEIN' },
        { mark: 'IM', bg: '#6B2F8C', ink: '#FFFFFF', name: 'Iraq Mall' },
        { mark: 'IA', bg: '#0F5C3C', ink: '#FFFFFF', name: 'Iraqi Airways' },
        { mark: 'FY', bg: '#7C1D2B', ink: '#FFFFFF', name: 'Fly Baghdad' },
      ].map(b => Object.assign({}, b, { tap: () => this.openBuy(b.name + ' gift card') })),
      pointOffers: [
        { brand: 'Iraqi Airways', mark: 'IA', bg: '#0F5C3C', ink: '#FFFFFF', slot: 'offer photo — 397×230', rate: '10 / 2.000 IQD', name: 'Book your next trip', sub: 'Turn points into miles on any route' },
        { brand: 'Babylon Rotana', mark: 'BR', bg: '#6B4E12', ink: '#FFFFFF', slot: 'offer photo — 397×230', rate: '8 / 2.000 IQD', name: 'Weekends in Baghdad', sub: 'Redeem points against any stay' },
      ].map(o => Object.assign({}, o, { tap: () => this.toast(o.brand + ' · ' + o.name) })),
      payPromos: [
        { name: 'Sending money abroad?', sub: 'Fast and low-fee international payments are available', art: 'radial-gradient(circle at 30% 40%,#2F6FBF,#0B1E3C 70%)', dot: 'rgba(255,255,255,.9)', tap: () => this.setState({ promo: true }) },
        { name: 'Split a bill in seconds', sub: 'Send a request to anyone in your contacts', art: 'radial-gradient(circle at 35% 45%,#1F6F6A,#06231F 70%)', dot: 'rgba(255,255,255,.3)', tap: () => {} },
      ],
      payHistory: [
        { ini: 'HA', bg: '#6E8BF5', ink: '#FFFFFF', badge: 'i', badgeBg: '#FFFFFF', badgeInk: '#0D1B2A', name: 'Hayder Aboshanna', dir: 'You sent', amt: '−600.000', date: '30 Aug', status: 'done' },
        { ini: 'MM', bg: '#F45D9B', ink: '#FFFFFF', badge: '▪', badgeBg: '#FFFFFF', badgeInk: '#E8453C', name: 'Mohammed Mahmood', dir: 'You sent', amt: '−198.000', date: '27 Aug', status: 'pending' },
        { ini: 'MA', bg: '#39C46E', ink: '#FFFFFF', badge: 'i', badgeBg: '#FFFFFF', badgeInk: '#0D1B2A', name: 'Mustafa Albofaisal', dir: 'Sent you', amt: '+1.000', date: '19 Aug', status: 'done' },
        { ini: 'ZA', bg: '#2CC7C7', ink: '#FFFFFF', badge: '▪', badgeBg: '#FFFFFF', badgeInk: '#0D1B2A', name: 'Zainab Al Saadi', dir: 'You sent', amt: '−75.000', date: '11 Aug', status: 'done' },
        { ini: 'SK', bg: '#F59E42', ink: '#FFFFFF', badge: '▪', badgeBg: '#FFFFFF', badgeInk: '#0D1B2A', name: 'Saad Kareem', dir: 'Sent you', amt: '+240.000', date: '2 Aug', status: 'pending' },
        { ini: 'AH', bg: '#2CBFB0', ink: '#FFFFFF', badge: 'i', badgeBg: '#FFFFFF', badgeInk: '#0D1B2A', name: 'Ahmed Al Janahi', dir: 'You sent', amt: '−27.190', date: '4 Jul', status: 'done' },
        { ini: 'NK', bg: '#3BA5F0', ink: '#FFFFFF', badge: '▪', badgeBg: '#FFFFFF', badgeInk: '#0D1B2A', name: 'Noor Kadhim', dir: 'You sent', amt: '−36.720', date: '23 Jun', status: 'done' },
        { ini: 'YH', bg: '#3B9BF0', ink: '#FFFFFF', badge: 'i', badgeBg: '#FFFFFF', badgeInk: '#0D1B2A', name: 'Yousif Hassan', dir: 'You sent', amt: '−8.280', date: '6 Jun', status: 'done' },
        { ini: 'RA', bg: '#8B87F5', ink: '#FFFFFF', badge: '▪', badgeBg: '#FFFFFF', badgeInk: '#0D1B2A', name: 'Rania Abbas', dir: 'Sent you', amt: '+120.000', date: '28 May', status: 'done' },
      ].map(h => Object.assign({}, h, {
        sub: h.status === 'pending' ? h.dir + ' · Pending' : h.dir + ' · Completed',
        amtInk: h.status === 'pending' ? '#FFCE7A' : (h.amt.charAt(0) === '+' ? '#3FD39F' : '#FFFFFF'),
      })),
      investBenefits: [
        { icon: 'ISX', name: 'Own a piece of Iraqi business', sub: 'Banks, telecoms and industry listed on the Iraq Stock Exchange' },
        { icon: '%', name: 'Save on trading fees', sub: '0% commission within your plan limits. Other fees, e.g. FX, may apply' },
        { icon: '◑', name: 'Investing made simple', sub: 'From recurring buys to automated strategies, invest at your own pace' },
      ],
      investSegments: ['Stocks', 'ETFs'].map(l => ({
        label: l,
        bg: (s.investSeg || 'Stocks') === l ? 'rgba(255,255,255,.16)' : 'transparent',
        ink: (s.investSeg || 'Stocks') === l ? '#FFFFFF' : '#8A95A2',
        pick: () => this.setState({ investSeg: l }),
      })),
      investPopular: (((s.investSeg || 'Stocks') === 'Stocks' ? [
        { ticker: 'BBOB', mark: 'BB', bg: '#0E2A5C', ink: '#FFFFFF', chg: '▲ 1,42 %', chgInk: '#3FD39F' },
        { ticker: 'TASC', mark: 'TA', bg: '#1F6F3F', ink: '#FFFFFF', chg: '▲ 0,86 %', chgInk: '#3FD39F' },
        { ticker: 'IBSD', mark: 'IB', bg: '#8C1D2B', ink: '#FFFFFF', chg: '▼ 0,31 %', chgInk: '#FF6B7A' },
        { ticker: 'BCOI', mark: 'BC', bg: '#123A6B', ink: '#FFFFFF', chg: '▲ 1,91 %', chgInk: '#3FD39F' },
        { ticker: 'INCP', mark: 'IN', bg: '#5B3E12', ink: '#FFFFFF', chg: '▼ 0,49 %', chgInk: '#FF6B7A' },
        { ticker: 'HBAY', mark: 'HB', bg: '#3C2A5E', ink: '#FFFFFF', chg: '▲ 0,46 %', chgInk: '#3FD39F' },
        { ticker: 'BIME', mark: 'BI', bg: '#0F4B4B', ink: '#FFFFFF', chg: '▲ 0,48 %', chgInk: '#3FD39F' },
        { ticker: 'IKLV', mark: 'IK', bg: '#4A4A4A', ink: '#FFFFFF', chg: '▼ 1,07 %', chgInk: '#FF6B7A' },
      ] : [
        { ticker: 'ISX60', mark: 'IS', bg: '#0E2A5C', ink: '#FFFFFF', chg: '▲ 0,72 %', chgInk: '#3FD39F' },
        { ticker: 'MENA', mark: 'MN', bg: '#1F6F3F', ink: '#FFFFFF', chg: '▲ 0,54 %', chgInk: '#3FD39F' },
        { ticker: 'GULF', mark: 'GF', bg: '#123A6B', ink: '#FFFFFF', chg: '▼ 0,22 %', chgInk: '#FF6B7A' },
        { ticker: 'GOLD', mark: 'AU', bg: '#6B4E12', ink: '#FFFFFF', chg: '▲ 1,18 %', chgInk: '#3FD39F' },
        { ticker: 'ENRG', mark: 'EN', bg: '#5B2A12', ink: '#FFFFFF', chg: '▲ 0,39 %', chgInk: '#3FD39F' },
        { ticker: 'WRLD', mark: 'WD', bg: '#0F4B4B', ink: '#FFFFFF', chg: '▲ 0,61 %', chgInk: '#3FD39F' },
        { ticker: 'SUKK', mark: 'SK', bg: '#3C2A5E', ink: '#FFFFFF', chg: '▼ 0,08 %', chgInk: '#FF6B7A' },
        { ticker: 'BOND', mark: 'BD', bg: '#4A4A4A', ink: '#FFFFFF', chg: '▲ 0,12 %', chgInk: '#3FD39F' },
      ])).map(p => Object.assign({}, p, { tap: () => this.openStock(p) })),
      investWatch: [
        { ticker: 'BBOB', mark: 'BB', bg: '#0E2A5C', ink: '#FFFFFF', name: 'Bank of Baghdad', sub: 'BBOB · Commercial bank', price: '0,650', chg: '▲ 1,42 %', chgInk: '#3FD39F' },
        { ticker: 'TASC', mark: 'TA', bg: '#1F6F3F', ink: '#FFFFFF', name: 'Asiacell Communications', sub: 'TASC · Mobile network', price: '8,120', chg: '▲ 0,86 %', chgInk: '#3FD39F' },
        { ticker: 'IBSD', mark: 'IB', bg: '#8C1D2B', ink: '#FFFFFF', name: 'Baghdad Soft Drinks', sub: 'IBSD · Beverages', price: '3,450', chg: '▼ 0,31 %', chgInk: '#FF6B7A' },
      ].map(w => Object.assign({}, w, { tap: () => this.openStock(w) })),
      investProducts: [
        { icon: '↗', name: 'Stocks' },
        { icon: '◎', name: 'Savings' },
        { icon: '◐', name: 'Portfolios' },
        { icon: '▤', name: 'Sukuk' },
      ].map(p => Object.assign({}, p, { tap: () => this.toast(p.name) })),
      airDisplay: s.airline ? 'flex' : 'none',
      airClose: () => this.setState({ airline: false }),
      airListDisplay: (s.airTab || 'Airlines') === 'Airlines' ? 'block' : 'none',
      airFinderDisplay: (s.airTab || 'Airlines') === 'Flight Finder' ? 'flex' : 'none',
      airTabs: [['Airlines', '✈'], ['Flight Finder', '⌕']].map(([l, ic]) => ({
        label: l, icon: ic,
        bg: (s.airTab || 'Airlines') === l ? 'rgba(255,255,255,.14)' : 'transparent',
        ink: (s.airTab || 'Airlines') === l ? '#FFFFFF' : '#8A95A2',
        pick: () => this.setState({ airTab: l }),
      })),
      airMine: [
        { mark: 'IA', bg: '#0F5C3C', name: 'Iraqi Airways', program: 'Iraqi Airways Club', balance: '12.400 mi' },
        { mark: 'QR', bg: '#5C0632', name: 'Qatar Airways', program: 'Privilege Club', balance: '3.150 mi' },
      ].map(a => Object.assign({}, a, { tap: () => this.toast(a.name + ' · ' + a.balance) })),
      airAll: [
        { mark: 'FB', bg: '#7C1D2B', name: 'Fly Baghdad', program: 'Fly Rewards', rate: '1 pt = 2 mi' },
        { mark: 'TK', bg: '#8C1D1D', name: 'Turkish Airlines', program: 'Miles&Smiles', rate: '1 pt = 1,5 mi' },
        { mark: 'EK', bg: '#4A1220', name: 'Emirates', program: 'Skywards', rate: '1 pt = 1,4 mi' },
        { mark: 'EY', bg: '#5B3E12', name: 'Etihad Airways', program: 'Etihad Guest', rate: '1 pt = 1,4 mi' },
        { mark: 'FZ', bg: '#0E2A5C', name: 'flydubai', program: 'Skywards', rate: '1 pt = 1,2 mi' },
        { mark: 'RJ', bg: '#123A6B', name: 'Royal Jordanian', program: 'Royal Club', rate: '1 pt = 1,2 mi' },
        { mark: 'ME', bg: '#0F4B4B', name: 'Middle East Airlines', program: 'Cedar Miles', rate: '1 pt = 1 mi' },
        { mark: 'G9', bg: '#3C2A5E', name: 'Air Arabia', program: 'Air Rewards', rate: '1 pt = 1 mi' },
        { mark: 'PC', bg: '#4A4A4A', name: 'Pegasus Airlines', program: 'BolBol', rate: 'Gift cards' },
      ].map(a => Object.assign({}, a, { tap: () => this.toast(a.name + ' · ' + a.rate) })),
      airFields: [
        { label: 'FROM', value: 'Baghdad (BGW)' },
        { label: 'TO', value: 'Istanbul (IST)' },
        { label: 'DATES', value: '12 – 19 Oct' },
        { label: 'TRAVELLERS', value: '1 adult' },
      ].map(x => Object.assign({}, x, { tap: () => this.toast('Change ' + x.label.toLowerCase()) })),
      airDeals: [
        { mark: 'IA', bg: '#0F5C3C', route: 'Baghdad → Dubai', sub: 'Iraqi Airways · non-stop', miles: '18.000 mi', cash: '+ 45.000 IQD' },
        { mark: 'TK', bg: '#8C1D1D', route: 'Baghdad → Istanbul', sub: 'Turkish Airlines · non-stop', miles: '22.500 mi', cash: '+ 60.000 IQD' },
        { mark: 'QR', bg: '#5C0632', route: 'Baghdad → Doha', sub: 'Qatar Airways · non-stop', miles: '16.000 mi', cash: '+ 38.000 IQD' },
      ].map(d => Object.assign({}, d, { tap: () => this.toast(d.route + ' · ' + d.miles) })),
      convDisplay: s.conv ? 'flex' : 'none',
      convClose: () => this.setState({ conv: false }),
      convReset: () => this.setState({ convAmt: '', convBase: 'IQD' }),
      ...(() => {
        const CUR = [
          { code: 'IQD', name: 'Iraqi Dinar', mark: 'ع', bg: '#0F5C3C', ink: '#FFFFFF', iqd: 1, dp: 0 },
          { code: 'USD', name: 'US Dollar', mark: '$', bg: '#123A6B', ink: '#FFFFFF', iqd: 1320, dp: 2 },
          { code: 'EUR', name: 'Euro', mark: '€', bg: '#0E2A5C', ink: '#FFFFFF', iqd: 1445, dp: 2 },
          { code: 'GBP', name: 'British Pound', mark: '£', bg: '#5C0632', ink: '#FFFFFF', iqd: 1690, dp: 2 },
          { code: 'XAU', name: 'Gold, 1 g', mark: 'Au', bg: '#F5DEB3', ink: '#5B3E12', iqd: 152000, dp: 4 },
        ];
        const base = CUR.find(c => c.code === (s.convBase || 'IQD')) || CUR[0];
        const raw = s.convAmt || '';
        const amt = parseFloat(raw.replace(',', '.')) || 0;
        const inIqd = amt * base.iqd;
        const group = (n, dp) => n.toLocaleString('de-DE', { minimumFractionDigits: dp, maximumFractionDigits: dp });
        return {
          convBaseName: base.name,
          convRows: CUR.map(c => {
            const isBase = c.code === base.code;
            return {
              code: c.code, name: c.name, mark: c.mark, bg: c.bg, ink: c.ink,
              value: isBase ? (raw ? (() => { const p = raw.split(','); const i = (parseInt(p[0] || '0', 10) || 0).toLocaleString('de-DE'); return p.length > 1 ? i + ',' + p[1] : i; })() : '0') : group(inIqd / c.iqd, c.dp),
              valueInk: isBase ? '#FFFFFF' : '#C9CFD6',
              rule: isBase ? '#FFFFFF' : 'rgba(255,255,255,.18)',
              rate: c.code === 'IQD' ? 'base currency' : '1 ' + c.code + ' = ' + c.iqd.toLocaleString('de-DE') + ' IQD',
              pick: () => this.setState({ convBase: c.code, convAmt: '' }),
            };
          }),
          convKeys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '0', '⌫'].map(k => ({
            label: k,
            bg: k === '⌫' || k === ',' ? 'rgba(255,255,255,.06)' : 'rgba(255,255,255,.1)',
            tap: () => this.setState(p => {
              let v = p.convAmt || '';
              if (k === '⌫') v = v.slice(0, -1);
              else if (k === ',') { if (!v.includes(',')) v = (v || '0') + ','; }
              else if (v.replace(/\D/g, '').length < 12) v += k;
              return { convAmt: v };
            }),
          })),
        };
      })(),
      mpOpen: () => this.setState({ profile: false, accounts: false, mp: s.mpRegistered === false ? 'login' : 'login', mpFocus: 'phone' }),
      agentOpen: () => this.setState({ accounts: false, agents: true }),
      agentClose: () => this.setState({ agents: false }),
      agentDisplay: s.agents ? 'flex' : 'none',
      agentNearest: 'Karrada Market · 400 m',
      agentList: [
        { name: 'Karrada Market', area: 'Karrada In, Baghdad · grocery', dist: '400 m', hours: 'Open until 23:00', bg: 'linear-gradient(160deg,#00C2A8,#0A3F38)' },
        { name: 'Al-Jadriya Mobile', area: 'Jadriya · phone shop', dist: '1,2 km', hours: 'Open until 22:00', bg: 'linear-gradient(160deg,#2563EB,#10225C)' },
        { name: 'Zain Cash point', area: 'Arasat al-Hindiya', dist: '1,8 km', hours: 'Open until 21:00', bg: 'linear-gradient(160deg,#7C3AED,#2E1065)' },
        { name: 'Baghdad Mall kiosk', area: 'Mansour · level 1', dist: '3,4 km', hours: 'Open until 22:30', bg: 'linear-gradient(160deg,#EC7E00,#7A3E00)' },
        { name: 'Al-Rasheed Exchange', area: 'Rasheed Street', dist: '4,1 km', hours: 'Closed · opens 09:00', bg: 'linear-gradient(160deg,#475569,#1E293B)' },
      ].map(ag => Object.assign({}, ag, { tap: () => this.toast(ag.name + ' · ' + ag.dist) })),
      mpEntryName: s.mpRegistered === false ? 'Become a merchant' : 'Merchant portal',
      mpEntrySub: s.mpRegistered === false ? 'Take card payments in your shop' : 'Take payments and see your sales',
      mpClose: () => this.setState({ mp: null, mpSheet: false, mpPay: null }),
      ...(() => {
        const phone = s.mpPhone || '';
        const pass = s.mpPass || '';
        const focus = s.mpFocus || 'phone';
        const ready = phone.length >= 10 && pass.length >= 4;
        const grp = (d) => d.replace(/^(\d{3})(\d{0,3})(\d{0,4}).*$/, (m, a, b, c) => [a, b, c].filter(Boolean).join(' '));
        const amtRaw = (s.mpAmt || '').replace(/\D/g, '');
        const amtNum = parseInt(amtRaw || '0', 10);
        const key = (k, field, max) => ({
          label: k,
          bg: k === '⌫' ? 'rgba(255,255,255,.06)' : 'rgba(255,255,255,.1)',
          tap: () => this.setState(p => {
            const cur = (p[field] || '');
            if (k === '⌫') return { [field]: cur.slice(0, -1) };
            if (k === '') return {};
            return cur.length < max ? { [field]: cur + k } : {};
          }),
        });
        return {
          mpLoginDisplay: s.mp === 'login' ? 'flex' : 'none',
          mpHomeDisplay: s.mp === 'home' ? 'flex' : 'none',
          mpBiz: 'Karrada Coffee House',
          mpRole: 'Omar A. · Owner',
          mpCollected: '18.420.000',
          mpToday: '640.000 IQD',
          mpLoginNote: 'Staff sign in with the same business number and their own password. Roles limit who can refund or see settlement.',
          mpPhoneText: phone ? grp(phone) : '770 000 0000',
          mpPhoneInk: phone ? '#FFFFFF' : '#5E6873',
          mpPhoneCaret: focus === 'phone' ? '#C6A058' : 'transparent',
          mpPassText: pass ? '•'.repeat(pass.length) : 'Enter password',
          mpPassInk: pass ? '#FFFFFF' : '#5E6873',
          mpPassCaret: focus === 'pass' ? '#C6A058' : 'transparent',
          mpFocusPhone: () => this.setState({ mpFocus: 'phone' }),
          mpFocusPass: () => this.setState({ mpFocus: 'pass' }),
          mpKeys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫'].map(k =>
            key(k, focus === 'phone' ? 'mpPhone' : 'mpPass', focus === 'phone' ? 10 : 8)),
          mpLoginBg: ready ? '#FFFFFF' : 'rgba(255,255,255,.12)',
          mpLoginInk: ready ? '#0D1B2A' : '#6E7986',
          mpLogin: () => { if (ready) this.setState({ mp: 'home' }); },
          mpActions: [
            { d: 'M3.2 6.4A3.2 3.2 0 0 1 6.4 3.2h5.1a3 3 0 0 1 2.1.9l6.8 6.8a3 3 0 0 1 0 4.2l-4.3 4.3a3 3 0 0 1-4.2 0L4.1 12.6a3 3 0 0 1-.9-2.1zM7.9 8.9a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2z', label: 'New sale', bg: '#FFFFFF', ink: '#0D1B2A', tap: () => this.setState({ mpSheet: true }) },
            { d: 'M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7z', label: 'Add money', bg: 'rgba(255,255,255,.12)', ink: '#FFFFFF', tap: () => this.setState({ mp: null, add: true }) },
            { d: 'M14.2 3.6l5.2 4.2-5.2 4.2V9.3H4.2v-3h10zM9.8 12l-5.2 4.2 5.2 4.2v-2.7h10v-3h-10z', label: 'Move', bg: 'rgba(255,255,255,.12)', ink: '#FFFFFF', tap: () => this.setState({ mp: null, send: true }) },
            { d: 'M5 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm7 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm7 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z', label: 'More', bg: 'rgba(255,255,255,.12)', ink: '#FFFFFF', tap: () => this.setState({ more: true }) },
          ],
          mpSheetDisplay: s.mpSheet ? 'block' : 'none',
          mpSheetClose: () => this.setState({ mpSheet: false }),
          mpSaleTypes: [
            { d: NFC_D, name: 'Tap to Pay on iPhone', sub: 'Accept contactless payments without connecting external hardware', tap: () => this.setState({ mpSheet: false, mpPay: 'tap', mpStage: 'amount', mpAmt: '' }) },
            { d: QR_D, name: 'QR code', sub: 'Show a code and let the customer scan it to pay', tap: () => this.setState({ mpSheet: false, mpPay: 'qr', mpStage: 'amount', mpAmt: '' }) },
          ],
          mpAmtDisplay: s.mpPay && (s.mpStage || 'amount') === 'amount' ? 'flex' : 'none',
          mpReaderDisplay: s.mpPay && s.mpStage === 'reader' ? 'flex' : 'none',
          mpPayClose: () => this.setState({ mpPay: null, mpStage: 'amount' }),
          mpReaderClose: () => this.setState({ mpPay: null, mpStage: 'amount', mpAmt: '' }),
          mpConfirmAmt: () => { if (amtNum > 0) this.setState({ mpStage: 'reader' }); },
          mpPayTitle: s.mpPay === 'qr' ? 'QR code' : 'Tap to Pay on iPhone',
          mpTapDisplay: s.mpPay === 'tap' ? 'flex' : 'none',
          mpQrDisplay: s.mpPay === 'qr' ? 'flex' : 'none',
          mpAmount: amtNum.toLocaleString('de-DE'),
          mpAmtKeys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '000', '0', '⌫'].map(k => ({
            label: k,
            bg: k === '⌫' ? 'rgba(255,255,255,.06)' : 'rgba(255,255,255,.1)',
            tap: () => this.setState(p => {
              let v = (p.mpAmt || '').replace(/\D/g, '');
              if (k === '⌫') v = v.slice(0, -1);
              else if (v.length + k.length <= 9) v += k;
              return { mpAmt: v };
            }),
          })),
          mpChargeBg: amtNum > 0 ? '#FFFFFF' : 'rgba(255,255,255,.12)',
          mpChargeInk: amtNum > 0 ? '#0D1B2A' : '#6E7986',
          mpChargeLabel: amtNum > 0 ? 'Continue' : 'Enter an amount',
          mpTx: [
            { d: NFC_D, bg: '#0F5C3C', name: 'Tap to Pay', sub: 'Today, 14:22 · Visa ·· 4417', amt: '+18.000', amtInk: '#3FD39F', staff: 'Omar' },
            { d: QR_D, bg: '#123A6B', name: 'QR code', sub: 'Today, 13:04 · iCASH wallet', amt: '+7.500', amtInk: '#3FD39F', staff: 'Hala' },
            { d: NFC_D, bg: '#0F5C3C', name: 'Tap to Pay', sub: 'Today, 11:47 · Mastercard ·· 8820', amt: '+32.000', amtInk: '#3FD39F', staff: 'Omar' },
            { d: 'M12 5.2V2L6.6 6.4 12 10.8V7.6a4.6 4.6 0 1 1-4.6 4.6H5a7 7 0 1 0 7-7z', bg: '#5C2630', name: 'Refund', sub: 'Yesterday, 19:10 · order 4471', amt: '−12.000', amtInk: '#FF6B7A', staff: 'Omar' },
          ],
          mpSales: [
            { d: 'M4.4 4h15.2a1.4 1.4 0 0 1 1.4 1.4v13.2a1.4 1.4 0 0 1-1.4 1.4H4.4A1.4 1.4 0 0 1 3 18.6V5.4A1.4 1.4 0 0 1 4.4 4zm1.2 3.2v2h12.8v-2zm0 4.4v6h12.8v-6z', name: 'In-person', meta: '42 sales' },
            { d: QR_D, name: 'QR code', meta: '18 sales' },
            { d: 'M6.6 8h3.4v2H6.6a2 2 0 0 0 0 4H10v2H6.6a4 4 0 0 1 0-8zm10.8 0a4 4 0 0 1 0 8H14v-2h3.4a2 2 0 0 0 0-4H14V8zM8.4 11h7.2v2H8.4z', name: 'Links', meta: '6 paid' },
            { d: 'M6 2.4h7.4L18.6 7v14.6H6zM13 3.9V7.6h3.8z', name: 'Invoices', meta: '3 paid' },
          ].map(x => Object.assign({}, x, { tap: () => this.toast(x.name + ' · ' + x.meta) })),
        };
      })(),
      staysDisplay: s.stays ? 'flex' : 'none',
      staysClose: () => this.setState({ stays: false }),
      staysFields: [
        { label: 'CITY', value: 'Baghdad, Iraq', icon: 'search' },
        { label: 'DATES', value: '14 – 15 Sep', icon: 'cal' },
      ],
      staysGuests: '2 guests · 1 room',
      staysDeals: [
        { name: 'Babylon Rotana', city: 'Jadriya, Baghdad', slot: 'hotel photo — 300×200', price: '210.000', rate: '10 pts / 2.000 IQD', stars: '★★★★★' },
        { name: 'Cristal Grand Ishtar', city: 'Karrada, Baghdad', slot: 'hotel photo — 300×200', price: '175.000', rate: '10 pts / 2.000 IQD', stars: '★★★★★' },
        { name: 'Divan Erbil', city: 'Erbil', slot: 'hotel photo — 300×200', price: '190.000', rate: '8 pts / 2.000 IQD', stars: '★★★★★' },
        { name: 'Karbala Rayhaan by Rotana', city: 'Karbala', slot: 'hotel photo — 300×200', price: '160.000', rate: '8 pts / 2.000 IQD', stars: '★★★★☆' },
      ].map(d => Object.assign({}, d, { tap: () => this.toast(d.name + ' · ' + d.price + ' IQD a night') })),
      staysCities: [
        { name: 'Baghdad', meta: '124 stays', slot: 'city photo — 180×130' },
        { name: 'Erbil', meta: '86 stays', slot: 'city photo — 180×130' },
        { name: 'Basra', meta: '41 stays', slot: 'city photo — 180×130' },
        { name: 'Najaf', meta: '38 stays', slot: 'city photo — 180×130' },
        { name: 'Karbala', meta: '33 stays', slot: 'city photo — 180×130' },
        { name: 'Sulaymaniyah', meta: '29 stays', slot: 'city photo — 180×130' },
      ].map(ct => Object.assign({}, ct, { tap: () => this.toast(ct.name + ' · ' + ct.meta) })),
      staysTabs: [['Discover', 'M12 2.6 3 9.2v11.2h6.2v-6.1h5.6v6.1H21V9.2z'], ['Favourites', 'M12 20.6 10.4 19.2C5.2 14.6 2 11.7 2 8.3A4.9 4.9 0 0 1 6.9 3.4c1.6 0 3.1.7 4.1 1.9h2c1-1.2 2.5-1.9 4.1-1.9A4.9 4.9 0 0 1 22 8.3c0 3.4-3.2 6.3-8.4 11z'], ['Bookings', 'M6.5 2.4h2v2h7v-2h2v2h1.8a1.4 1.4 0 0 1 1.4 1.4v14.4a1.4 1.4 0 0 1-1.4 1.4H4.7a1.4 1.4 0 0 1-1.4-1.4V5.8a1.4 1.4 0 0 1 1.4-1.4h1.8zM5 9.4v10.2h14V9.4z']].map(([l, d]) => ({
        label: l, d,
        bg: (s.staysTab || 'Discover') === l ? 'rgba(255,255,255,.14)' : 'transparent',
        ink: (s.staysTab || 'Discover') === l ? '#FFFFFF' : '#8A95A2',
        pick: () => this.setState({ staysTab: l }),
      })),
      adDisplay: s.adClosed ? 'none' : 'block',
      adName: 'Get paid faster with Pro links',
      adSub: 'Create and send payment links in seconds, with iCASH Pro. T&Cs apply',
      adTap: () => this.setState({ tab: 'transfers', scroll: 0 }),
      adClose: (ev) => { if (ev && ev.stopPropagation) ev.stopPropagation(); this.setState({ adClosed: true }); },
      homeAdsUnused: [
        { tag: 'SPONSORED', name: 'Zain Cash top-up, 5% back', sub: 'On your first top-up this month', bg: 'linear-gradient(120deg,#2563EB,#10225C)', tap: () => this.setState({ tab: 'lifestyle', scroll: 0 }) },
        { tag: 'ICASH PREMIUM', name: 'Free metal card for a year', sub: 'Upgrade before 30 September', bg: 'linear-gradient(120deg,#1F6F6A,#0A2A2F)', tap: () => this.setState({ tab: 'cards', cardView: 'new', scroll: 0 }) },
        { tag: 'SPONSORED', name: 'Babylon Rotana · 10% cashback', sub: 'Book with your iCASH card', bg: 'linear-gradient(120deg,#6B4E12,#241705)', tap: () => this.setState({ tab: 'lifestyle', scroll: 0 }) },
      ],
      homeActions: [
        { kind: 'plus', label: 'Add money', tap: () => this.setState({ add: true, addEntry: '', more: false }) },
        { kind: 'move', label: 'Move', tap: () => this.setState({ send: true, more: false }) },
        { kind: 'details', label: 'Details', tap: () => this.setState({ details: true, more: false }) },
        { kind: 'more', label: 'More', tap: () => this.setState({ more: true, send: false }) },
      ].map(a => Object.assign({}, a, {
        iconPlus: a.kind === 'plus' ? 'block' : 'none',
        iconMove: a.kind === 'move' ? 'block' : 'none',
        iconDetails: a.kind === 'details' ? 'block' : 'none',
        iconMore: a.kind === 'more' ? 'flex' : 'none',
      })),
      homeDiscover: [
        { ini: 'LN', name: 'Personal loan', sub: 'Get a quote in minutes', cta: 'Apply', bg: '#2563EB', tap: () => this.setState({ tab: 'lifestyle', scroll: 0 }) },
        { ini: 'BR', name: 'Brokerage account', sub: 'Simple way to invest. Capital at risk.', cta: 'Open', bg: '#00A78F', tap: () => this.setState({ tab: 'invest', scroll: 0 }) },
        { ini: 'SV', name: 'Savings vault', sub: '4,2% a year, withdraw anytime', cta: 'Start', bg: '#7C3AED', tap: () => this.setState({ tab: 'invest', scroll: 0 }) },
      ],
      manageUpcoming: () => this.toast('3 upcoming payments · manage in Standing orders'),
      startInvesting: () => this.setState({ invOnboard: true, invStep: 0 }),
      investEmptyDisplay: s.invested ? 'none' : 'block',
      investOwnDisplay: s.invested ? 'block' : 'none',
      ...(() => {
        const STEPS = ['name', 'source', 'kyc', 'done'];
        const step = s.invStep || 0;
        const kind = STEPS[step];
        const SOURCES = [
          ['Salary', 'Monthly pay from an employer'],
          ['Business income', 'Profits from a company you own'],
          ['Savings', 'Money saved over time'],
          ['Investment returns', 'Dividends, rent or sale proceeds'],
          ['Family support', 'Gifts or support from relatives'],
          ['Other', 'Tell us more in the next step'],
        ];
        const src = s.invSource;
        const ready = kind !== 'source' || !!src;
        return {
          invDisplay: s.invOnboard ? 'flex' : 'none',
          invProgress: Math.round(((step + 1) / STEPS.length) * 100) + '%',
          invTitle: ['Confirm your legal name', 'Where do your funds come from?', 'Reuse your iCASH verification', 'Your investment account is open'][step],
          invSub: [
            'This has to match the identity document on your iCASH account.',
            'Iraqi regulation requires us to ask this before you can trade.',
            'You verified your identity when you opened your account, so there is nothing new to upload.',
            'Trading on the Iraq Stock Exchange is enabled. Your capital is at risk.',
          ][step],
          invNameDisplay: kind === 'name' ? 'flex' : 'none',
          invSourceDisplay: kind === 'source' ? 'flex' : 'none',
          invKycDisplay: kind === 'kyc' ? 'flex' : 'none',
          invDoneDisplay: kind === 'done' ? 'flex' : 'none',
          invNameFields: [
            { label: 'FULL LEGAL NAME', value: 'Ahmed Al Janahi' },
            { label: 'DATE OF BIRTH', value: '14 March 1994' },
            { label: 'COUNTRY OF RESIDENCE', value: 'Iraq · Baghdad' },
          ].map(n => Object.assign({}, n, { tap: () => this.toast('Name changes are reviewed by support') })),
          invSourceOptions: SOURCES.map(([name, sub]) => ({
            name, sub,
            bg: src === name ? 'rgba(0,194,168,.12)' : '#15191E',
            border: src === name ? '#00C2A8' : 'transparent',
            tick: src === name ? '✓' : '',
            tickBg: src === name ? '#00C2A8' : 'transparent',
            tickBorder: src === name ? '#00C2A8' : 'rgba(255,255,255,.22)',
            pick: () => this.setState({ invSource: name }),
          })),
          invDocName: 'Iraqi national ID ·· 4471',
          invDocMeta: 'Verified 10 September 2026 · valid to 2031',
          invKycChecks: [
            { label: 'Document authenticity checked' },
            { label: 'Selfie matched to your document' },
            { label: 'Address and residence confirmed' },
          ],
          invNewDoc: () => this.toast('You can re-verify from Profile · Security'),
          invSummary: [
            { label: 'Account holder', value: 'Ahmed Al Janahi' },
            { label: 'Source of funds', value: src || 'Salary' },
            { label: 'Verification', value: 'Reused from iCASH KYC' },
            { label: 'Commission', value: '0% within your plan limits' },
          ],
          invCta: ['This is me', 'Continue', 'Use this verification', 'Start investing'][step],
          invCtaBg: ready ? '#FFFFFF' : 'rgba(255,255,255,.12)',
          invCtaInk: ready ? '#0D1B2A' : '#6E7986',
          invLegal: kind === 'done'
            ? 'Trades in this prototype are simulated.'
            : 'iCASH Invest is provided under licence. Capital at risk.',
          invClose: () => this.setState({ invOnboard: false }),
          invBack: () => (step === 0 ? this.setState({ invOnboard: false }) : this.setState({ invStep: step - 1 })),
          invNext: () => {
            if (!ready) return;
            if (kind === 'done') { this.setState({ invOnboard: false, invested: true, invStep: 0, scroll: 0 }); this.toast('Investment account opened'); return; }
            this.setState({ invStep: step + 1, invSource: src || (kind === 'source' ? 'Salary' : src) });
          },
        };
      })(),
      ...(() => {
        const R = s.pfRange || '1D';
        const META = {
          '1D': { n: 78, drift: 0.9, vol: 0.45, note: 'Iraq Stock Exchange · today, 10:00–14:00 Baghdad time' },
          '1W': { n: 70, drift: 2.6, vol: 0.7, note: 'Iraq Stock Exchange · last 5 trading sessions' },
          '1M': { n: 84, drift: 7.4, vol: 1.1, note: 'Iraq Stock Exchange · last 30 days' },
          '6M': { n: 96, drift: 24.0, vol: 2.2, note: 'Iraq Stock Exchange · last 6 months' },
          '1Y': { n: 104, drift: 42.0, vol: 3.0, note: 'Iraq Stock Exchange · last 12 months' },
          '5Y': { n: 120, drift: 96.0, vol: 4.6, note: 'Iraq Stock Exchange · last 5 years' },
        };
        const m = META[R] || META['1D'];
        const TOTAL = 1152400;
        const start = TOTAL / (1 + m.drift / 100);
        let seed = 20260914 + R.length * 7919 + m.n;
        const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
        const vals = [];
        let v = start;
        for (let i = 0; i < m.n; i++) {
          const t = i / (m.n - 1);
          const trend = start * (m.drift / 100) * t;
          v += start * (m.vol / 100) * (rnd() - 0.48);
          if (i % 11 === 3) v += start * (m.vol / 100) * (rnd() - 0.3) * 2.2;
          vals.push(Math.round(v + trend));
        }
        vals[0] = Math.round(start);
        vals[m.n - 1] = TOTAL;
        const W = 402, H = 272, PAD = 26;
        const lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals);
        const sp = (hi - lo) || 1;
        const y = (val) => +(H - PAD - ((val - lo) / sp) * (H - PAD * 2)).toFixed(1);
        const pts = vals.map((val, i) => [+(i * (W / (m.n - 1))).toFixed(1), y(val)]);
        let line = 'M' + pts[0][0] + ' ' + pts[0][1];
        for (let i = 1; i < pts.length; i++) line += ' L' + pts[i][0] + ' ' + pts[i][1];
        const up = TOTAL >= vals[0];
        const ink = up ? '#3FD39F' : '#FF6B7A';
        const grp = (n) => Math.round(n).toLocaleString('de-DE');
        const gain = TOTAL - vals[0];
        const pct = (gain / vals[0]) * 100;
        const LABEL = { '1D': 'Today', '1W': 'This week', '1M': 'This month', '6M': '6 months', '1Y': 'This year', '5Y': '5 years' };
        const hiY = y(hi), loY = y(lo);
        return {
          pfTotal: grp(TOTAL),
          pfDelta: (up ? '+' : '−') + grp(Math.abs(gain)) + ' IQD  ' + (up ? '▲' : '▼') + ' ' + Math.abs(pct).toFixed(2).replace('.', ',') + ' %  ·  ' + LABEL[R],
          pfDeltaInk: ink,
          pfStroke: ink,
          pfFill: up ? 'rgba(63,211,159,.13)' : 'rgba(255,107,122,.13)',
          pfLine: line,
          pfArea: line + ' L' + W + ' ' + H + ' L0 ' + H + ' Z',
          pfBaseY: y(vals[0]),
          pfDotX: pts[pts.length - 1][0] - 4,
          pfDotY: pts[pts.length - 1][1],
          pfHigh: grp(hi),
          pfLow: grp(lo),
          pfHighTop: Math.max(4, Math.round(hiY - 26)) + 'px',
          pfLowBottom: Math.max(4, Math.round(H - loY - 26)) + 'px',
          pfNote: m.note + '. Prices are delayed by 15 minutes; your capital is at risk.',
          pfRanges: ['1D', '1W', '1M', '6M', '1Y', '5Y'].map(l => ({
            label: l,
            bg: R === l ? 'rgba(255,255,255,.14)' : 'transparent',
            ink: R === l ? '#FFFFFF' : '#8A95A2',
            pick: () => this.setState({ pfRange: l }),
          })),
          pfHoldings: [
            { mark: 'BB', bg: '#0E2A5C', ticker: 'BBOB', name: 'Bank of Baghdad', sub: '640.000 shares · avg 0,624', value: '416.000', chg: '▲ 4,2%', chgInk: '#6FE3D2' },
            { mark: 'TA', bg: '#1F6F3F', ticker: 'TASC', name: 'Asiacell Communications', sub: '42.000 shares · avg 7,940', value: '341.000', chg: '▲ 2,3%', chgInk: '#6FE3D2' },
            { mark: 'IB', bg: '#8C1D2B', ticker: 'IBSD', name: 'Baghdad Soft Drinks', sub: '68.000 shares · avg 3,520', value: '234.600', chg: '▼ 2,0%', chgInk: '#FF8A8A' },
            { mark: 'AU', bg: '#6B4E12', ticker: 'GOLD', name: 'Gold, 1 g', sub: '1,05 g · avg 148.400', value: '160.800', chg: '▲ 8,4%', chgInk: '#6FE3D2' },
          ].map(h => Object.assign({}, h, {
            tap: () => this.openStock({ ticker: h.ticker, mark: h.mark, bg: h.bg, chg: h.chg, chgInk: h.chgInk === '#6FE3D2' ? '#3FD39F' : '#FF6B7A' }),
          })),
        };
      })(),
      addToWallet: () => this.toast('Card added to Apple Wallet'),
      pointsToMiles: () => this.setState({ airline: true, airTab: 'Airlines' }),
      mpForgot: () => this.toast('Password reset sent to the business number'),
      mpSettlement: () => this.toast('Next settlement tonight at 23:00'),
      agentMap: () => this.toast('Map view opens with 5 agents nearby'),
      cdSubsTap: () => this.toast('Subscriptions on this card'),
      staysCity: () => this.toast('Change city'),
      staysDates: () => this.toast('Change dates'),
      staysGuestsTap: () => this.toast('Change guests and rooms'),
      openSearch: () => this.toast('Search across payments, people and services'),
      lightToggle: () => this.setLight(!s.light),
      lightTrack: s.light ? this.accent : 'rgba(255,255,255,.18)',
      lightKnob: s.light ? '21px' : '3px',
      langPickDisplay: s.langPick ? 'block' : 'none',
      langClose: () => this.setState({ langPick: false, langDraft: null }),
      langOptions: [['English', 'Left to right', 'en'], ['العربية', 'من اليمين إلى اليسار', 'ar']].map(([name, note, key]) => {
        const on = (s.langDraft || s.lang || 'en') === key;
        return {
          name: name, note: note, mark: on ? '✓' : '',
          ringBg: on ? this.accent : 'transparent',
          ringBorder: on ? this.accent : 'rgba(255,255,255,.28)',
          pick: () => this.setState({ langDraft: key }),
        };
      }),
      langApplyLabel: (s.langDraft || s.lang || 'en') === 'ar' ? 'تغيير اللغة' : 'Change language',
      langApply: () => { const k = s.langDraft || s.lang || 'en'; this.setState({ langPick: false, langDraft: null }); this.setLang(k); },
      ...this.linkedVals(),
      openSupport: () => this.setState({ support: true }),
      helpFabDisplay: (s.splash || s.locked || s.onboard) ? 'none' : 'flex',
      supClose: () => this.setState({ support: false }),
      supDisplay: s.support ? 'block' : 'none',
      supFaq: [
        ['How do I add money?', 'Debit or credit card, cash at any iCASH agent, or a transfer from another iCASH wallet. All of them arrive instantly.'],
        ['How long does a transfer take?', 'Instantly to any iCASH wallet, day or night, whether you send to a phone number or a wallet number.'],
        ['What does a stock order cost?', 'A 0,85% service fee with a 2.500 IQD minimum, plus the 0,15% ISX levy. The full total is shown before you confirm.'],
        ['I lost my phone. Is my card safe?', 'Freeze the card from Cards straight away, then order a replacement. Your balance stays in your account.'],
        ['How do I switch the app to Arabic?', 'Profile, then Language. The whole app changes, including the right-to-left layout.'],
      ].map(([q, a], i) => ({
        q: q, a: a,
        answerDisplay: s.supOpen === i ? 'block' : 'none',
        rotate: s.supOpen === i ? 'rotate(-45deg)' : 'rotate(135deg)',
        tap: () => this.setState(p => ({ supOpen: p.supOpen === i ? null : i })),
      })),
      supCall: () => this.toast('Calling +964 780 000 1234'),
      supWhats: () => this.toast('Opening WhatsApp chat with iCASH'),
      seeAll: () => this.toast('Showing the full list'),
      forgotPin: () => this.toast('PIN reset link sent to your phone'),
      reactivateCard: () => this.toast('Contact support to reactivate a card'),
      cardHelp: () => this.toast('A specialist will reply in the chat'),
      terminateCard: () => this.toast('Terminating needs confirmation in chat'),
      searchFlights: () => this.toast('12 reward flights from Baghdad'),
      searchStays: () => this.toast('124 stays in Baghdad'),
      toastDisplay: s.toast ? 'flex' : 'none',
      toastMsg: s.toast || '',

      openAnalytics: () => this.setState({ analytics: true, anRange: s.anRange || 'Month' }),
      anClose: () => this.setState({ analytics: false }),
      anDisplay: s.analytics ? 'flex' : 'none',
      anRanges: ['Day', 'Week', 'Month'].map(l => ({
        label: l,
        bg: (s.anRange || 'Month') === l ? this.accent : 'transparent',
        ink: (s.anRange || 'Month') === l ? '#FFFFFF' : '#8A95A2',
        pick: () => this.setState({ anRange: l }),
      })),
      anBudget: () => this.setState({ budgetSheet: true }),
      ...this.budgetVals(),
      ...(() => {
        const AN = {
          Day: { period: 'today', total: '86.500', delta: '+12% vs yesterday', deltaInk: '#FF8A8A',
            net: '−86.500', inc: '0 IQD', out: '86.500 IQD', avgLabel: 'Average per hour', avg: '3.600', peak: '18:00 · 31.000 IQD',
            pts: [4, 10, 8, 26, 18, 44, 62, 58], labels: ['8', '10', '12', '14', '16', '18', '20', '22'],
            cats: [['Cafes and food', '38.000', 44], ['Transport', '21.500', 25], ['Groceries', '18.000', 21], ['Other', '9.000', 10]],
            merch: [['CF', 'Ciao Cafe', '2 payments', '24.000', '#2563EB'], ['AS', 'Asiacell', 'Top-up', '25.000', '#EC7E00'], ['KR', 'Karrada Taxi', '3 rides', '21.500', '#00A78F'], ['MK', 'Al Rashid Market', '1 payment', '16.000', '#7C3AED']] },
          Week: { period: 'this week', total: '248.000', delta: '−12% vs last week', deltaInk: '#6FE3D2',
            net: '+97.000', inc: '345.000 IQD', out: '248.000 IQD', avgLabel: 'Average per day', avg: '35.400', peak: 'Thursday · 68.000 IQD',
            pts: [26, 42, 20, 68, 34, 52, 44], labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            cats: [['Groceries', '86.000', 35], ['Cafes and food', '64.000', 26], ['Transport', '48.000', 19], ['Bills and top-ups', '50.000', 20]],
            merch: [['MK', 'Al Rashid Market', '4 payments', '86.000', '#00A78F'], ['CF', 'Ciao Cafe', '6 payments', '52.000', '#2563EB'], ['AS', 'Asiacell', '2 top-ups', '50.000', '#EC7E00'], ['KR', 'Karrada Taxi', '9 rides', '48.000', '#7C3AED']] },
          Month: { period: 'this month', total: '486.200', delta: '+8% vs August', deltaInk: '#FF8A8A',
            net: '+263.800', inc: '750.000 IQD', out: '486.200 IQD', avgLabel: 'Average per day', avg: '34.700', peak: 'Week of 8 Sep · 162.000 IQD',
            pts: [58, 96, 74, 124, 88, 142, 118, 162], labels: ['1', '5', '9', '13', '17', '21', '25', '29'],
            cats: [['Groceries', '168.000', 35], ['Cafes and food', '124.200', 26], ['Transport', '92.000', 19], ['Bills and top-ups', '102.000', 20]],
            merch: [['MK', 'Al Rashid Market', '14 payments', '168.000', '#00A78F'], ['CF', 'Ciao Cafe', '21 payments', '124.200', '#2563EB'], ['AS', 'Asiacell', '4 top-ups', '102.000', '#EC7E00'], ['KR', 'Karrada Taxi', '32 rides', '92.000', '#7C3AED']] },
        };
        const a = AN[s.anRange || 'Month'];
        const W = 330, H = 108, max = Math.max.apply(null, a.pts) * 1.12;
        const xy = a.pts.map((v, i) => [
          +(i * (W / (a.pts.length - 1))).toFixed(1),
          +(H - (v / max) * H + 6).toFixed(1),
        ]);
        let line = 'M' + xy[0][0] + ' ' + xy[0][1];
        for (let i = 1; i < xy.length; i++) {
          const p = xy[i - 1], c = xy[i], mx = (p[0] + c[0]) / 2;
          line += ' C' + mx + ' ' + p[1] + ',' + mx + ' ' + c[1] + ',' + c[0] + ' ' + c[1];
        }
        const DOTS = ['#2563EB', '#00C2A8', '#7C3AED', '#EC7E00'];
        return {
          anPeriodLabel: a.period,
          anTotal: a.total,
          anDelta: a.delta,
          anDeltaInk: a.deltaInk,
          anNet: a.net,
          anIn: a.inc,
          anOut: a.out,
          anAvgLabel: a.avgLabel,
          anAvg: a.avg,
          anPeak: a.peak,
          anLine: line,
          anArea: line + ' L' + W + ' ' + (H + 12) + ' L0 ' + (H + 12) + ' Z',
          anStroke: this.accent,
          anFill: 'rgba(255,255,255,.07)',
          anLabels: a.labels.map(l => ({ label: l })),
          anCats: a.cats.map((c, i) => ({
            name: c[0], amt: c[1], pct: c[2] + '%', dot: DOTS[i % 4],
            tap: () => this.toast(c[0] + ' · ' + c[1] + ' IQD'),
          })),
          anMerchants: a.merch.map(m => ({
            ini: m[0], name: m[1], sub: m[2], amt: m[3], bg: m[4],
            tap: () => this.toast(m[1] + ' · ' + m[3] + ' IQD'),
          })),
          anBudgetNote: s.budgetOn ? 'Spent ' + a.total + ' of ' + iqd(s.budget) + ' IQD' : 'No budget yet · tap to set one',
        };
      })(),
      ...(() => {
        const AVAIL = 128400;
        const raw = (s.wdEntry || '').replace(/\D/g, '');
        const num = parseInt(raw || '0', 10);
        const over = num > AVAIL;
        const ok = num > 0 && !over;
        const grp = (n) => n.toLocaleString('de-DE');
        return {
          wdDisplay: s.withdraw ? 'flex' : 'none',
          wdClose: () => this.setState({ withdraw: false, wdEntry: '' }),
          wdAmount: raw ? grp(num) : '0',
          wdInk: over ? '#FF8A8A' : (num ? '#FFFFFF' : '#5E6873'),
          wdNote: over ? 'More than you have available' : grp(AVAIL) + ' IQD available · no fee',
          wdNoteInk: over ? '#FF8A8A' : '#8A95A2',
          wdAll: () => this.setState({ wdEntry: String(AVAIL) }),
          wdTarget: 'Main account ·· 9169 · IQD',
          wdPickTarget: () => this.setState({ withdraw: false, accounts: true }),
          wdKeys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '000', '0', '⌫'].map(k => ({
            label: k,
            bg: k === '⌫' || k === '000' ? 'rgba(255,255,255,.06)' : 'rgba(255,255,255,.10)',
            press: () => this.setState(p => {
              let v = (p.wdEntry || '').replace(/\D/g, '');
              if (k === '⌫') v = v.slice(0, -1);
              else if (v.length + k.length <= 9) v += k;
              return { wdEntry: v };
            }),
          })),
          wdCta: over ? 'Amount too high' : (num ? 'Withdraw ' + grp(num) + ' IQD' : 'Enter an amount'),
          wdCtaBg: ok ? '#FFFFFF' : 'rgba(255,255,255,.12)',
          wdCtaInk: ok ? '#0D1B2A' : '#6E7986',
          wdConfirm: () => {
            if (!ok) return;
            this.setState({ withdraw: false, wdEntry: '' });
            this.toast(grp(num) + ' IQD moved to your Main account');
          },
        };
      })(),
      dtDisplay: s.details ? 'flex' : 'none',
      dtClose: () => this.setState({ details: false }),
      dtName: 'Ahmed Al Janahi',
      dtRole: 'Personal account · opened 10 September 2026',
      dtCurrency: 'IQD',
      dtTabs: ['Local', 'International'].map(l => ({
        label: l,
        bg: (s.dtTab || 'Local') === l ? 'rgba(255,255,255,.16)' : 'transparent',
        ink: (s.dtTab || 'Local') === l ? '#FFFFFF' : '#8A95A2',
        pick: () => this.setState({ dtTab: l }),
      })),
      dtHint: (s.dtTab || 'Local') === 'Local'
        ? 'Share these to receive money from any Iraqi bank or iCASH user.'
        : 'Share these to receive money from abroad. Incoming currency is converted to IQD at the live rate.',
      dtRows: ((s.dtTab || 'Local') === 'Local' ? [
        ['ACCOUNT HOLDER', 'Ahmed Al Janahi'],
        ['ACCOUNT NUMBER', '0085 0000 9169'],
        ['IBAN', 'IQ98 ICSH 0085 0000 9169'],
        ['BANK', 'iCASH Iraq · Baghdad'],
        ['CURRENCY', 'IQD · Iraqi Dinar'],
        ['PHONE TAG', '+964 770 123 4567'],
      ] : [
        ['ACCOUNT HOLDER', 'Ahmed Al Janahi'],
        ['IBAN', 'IQ98 ICSH 0085 0000 9169'],
        ['SWIFT / BIC', 'ICSHIQBA'],
        ['BANK ADDRESS', 'Karrada, Baghdad, Iraq'],
        ['CURRENCY', 'IQD · Iraqi Dinar'],
        ['REFERENCE', 'Not required'],
      ]).map(([label, value]) => ({
        label, value,
        copy: () => {
          try { navigator.clipboard.writeText(value); } catch (e) {}
          this.toast(label.charAt(0) + label.slice(1).toLowerCase() + ' copied');
        },
      })),
      dtCopyAll: () => {
        const txt = 'Ahmed Al Janahi · IQ98 ICSH 0085 0000 9169 · ICSHIQBA · IQD';
        try { navigator.clipboard.writeText(txt); } catch (e) {}
        this.toast('All details copied');
      },
      dtShare: () => this.toast('Details shared'),
      dtNote: 'Money sent to these details arrives in your Main account ·· 9169.',
      ...(() => {
        const name = s.buy;
        const blank = { byDisplay: 'none', byName: '', bySub: '', byIcon: '', byArt: 'transparent', byOptions: [], byRows: [], byCta: '', byNote: '', byClose: () => {}, byConfirm: () => {} };
        if (!name) return blank;
        const PRESETS = {
          'eSIM': { icon: '▤', art: 'linear-gradient(160deg,#22D3EE,#0E7490)', sub: 'Global data, active in minutes',
            opts: [['3 GB · 7 days', '18.000 IQD', 18000], ['10 GB · 30 days', '42.000 IQD', 42000], ['20 GB · 30 days', '74.000 IQD', 74000], ['Unlimited · 30 days', '132.000 IQD', 132000]] },
          'Lounges': { icon: '⌾', art: 'linear-gradient(160deg,#C6A058,#8A6B2C)', sub: 'Airport lounge passes',
            opts: [['1 pass · BGW', '35.000 IQD', 35000], ['2 passes · BGW', '66.000 IQD', 66000], ['1 pass · EBL', '38.000 IQD', 38000], ['Annual · 6 passes', '180.000 IQD', 180000]] },
          'Top-ups': { icon: '↗', art: 'linear-gradient(160deg,#FB923C,#C2410C)', sub: 'Asiacell, Zain, Korek',
            opts: [['5.000 IQD', 'instant', 5000], ['10.000 IQD', 'instant', 10000], ['25.000 IQD', 'instant', 25000], ['50.000 IQD', 'instant', 50000]] },
        };
        const p = PRESETS[name] || { icon: '▣', art: 'linear-gradient(160deg,#2563EB,#10225C)', sub: 'Code delivered by SMS and in the app',
          opts: [['10.000 IQD', 'code by SMS', 10000], ['25.000 IQD', 'code by SMS', 25000], ['50.000 IQD', 'code by SMS', 50000], ['100.000 IQD', 'code by SMS', 100000]] };
        const i = Math.min(s.byPick || 0, p.opts.length - 1);
        const sel = p.opts[i];
        const amount = sel[2];
        const points = Math.round(amount / 2000);
        const grp = (n) => n.toLocaleString('de-DE');
        return {
          byDisplay: 'flex',
          byName: name,
          bySub: p.sub,
          byIcon: p.icon,
          byArt: p.art,
          byClose: () => this.setState({ buy: null }),
          byOptions: p.opts.map((o, k) => ({
            label: o[0], meta: o[1],
            bg: k === i ? 'rgba(37,99,235,.14)' : '#15191E',
            border: k === i ? this.accent : 'transparent',
            pick: () => this.setState({ byPick: k }),
          })),
          byRows: [
            ['Pay from', 'Main account ·· 9169', '#FFFFFF', '500'],
            ['Delivery', name === 'Lounges' ? 'Pass in your wallet' : 'Instant', '#FFFFFF', '500'],
            ['Points earned', '+' + grp(points) + ' points', '#6FE3D2', '500'],
            ['Total', grp(amount) + ' IQD', '#FFFFFF', '700'],
          ].map(r => ({ label: r[0], value: r[1], ink: r[2], weight: r[3] })),
          byCta: 'Pay ' + grp(amount) + ' IQD',
          byNote: 'No fee. Digital goods cannot be refunded once the code is revealed.',
          byConfirm: () => this.setState({
            buy: null,
            ok: {
              title: name + ' purchased',
              amount: grp(amount) + ' IQD',
              sub: sel[0] + ' · paid from Main account ·· 9169',
              rows: [['Delivery', name === 'Lounges' ? 'Pass added to your wallet' : 'Code sent by SMS'], ['Points earned', '+' + grp(points) + ' points'], ['Reference', 'ORD 5512 0088']],
            },
          }),
        };
      })(),
      calOpen: () => this.setState({ cal: true, calDay: s.calDay || 12 }),
      calClose: () => this.setState({ cal: false }),
      calDisplay: s.cal ? 'flex' : 'none',
      calMonth: 'September 2026',
      calWeekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(l => ({ label: l })),
      ...(() => {
        const DAY = {
          2: [['SK', 'Saad Kareem', 'Sent you · 09:12', '+240.000', '#F59E42', '#6FE3D2']],
          4: [['AH', 'Ahmed Al Janahi', 'You sent · 14:40', '−27.190', '#2CBFB0', '#FFFFFF']],
          8: [['NK', 'Noor Kadhim', 'You sent · 11:03', '−36.720', '#3BA5F0', '#FFFFFF'],
              ['ZA', 'Zainab Al Saadi', 'You sent · 19:22', '−75.000', '#2CC7C7', '#FFFFFF']],
          11: [['MA', 'Mustafa Albofaisal', 'Sent you · 08:45', '+1.000', '#39C46E', '#6FE3D2']],
          12: [['HA', 'Hayder Aboshanna', 'You sent · 13:18', '−600.000', '#6E8BF5', '#FFFFFF'],
               ['MM', 'Mohammed Mahmood', 'You sent · 17:02', '−198.000', '#F45D9B', '#FFFFFF'],
               ['RA', 'Rania Abbas', 'Sent you · 21:30', '+120.000', '#8B87F5', '#6FE3D2']],
          14: [['YH', 'Yousif Hassan', 'You sent · 10:05', '−8.280', '#3B9BF0', '#FFFFFF']],
          18: [['HA', 'Hayder Aboshanna', 'Scheduled · 09:00', '−250.000', '#6E8BF5', '#FFFFFF']],
          22: [['NK', 'Noor Kadhim', 'You sent · 16:41', '−45.000', '#3BA5F0', '#FFFFFF']],
        };
        const sel = s.calDay || 12;
        const items = DAY[sel] || [];
        const total = items.reduce((t, i) => t + parseInt(i[3].replace(/[^0-9]/g, ''), 10) * (i[3][0] === '+' ? 1 : -1), 0);
        return {
          calDays: Array.from({ length: 30 }, (_, i) => {
            const d = i + 1, has = !!DAY[d], on = d === sel;
            return {
              label: String(d),
              bg: on ? 'rgba(255,255,255,.16)' : (has ? 'rgba(255,255,255,.05)' : 'transparent'),
              border: on ? 'rgba(255,255,255,.4)' : 'transparent',
              ink: has || on ? '#FFFFFF' : '#5E6873',
              dot: has ? this.accent : 'transparent',
              cursor: has ? 'pointer' : 'default',
              pick: () => this.setState({ calDay: d }),
            };
          }),
          calDayTitle: sel + ' September 2026',
          calDaySum: items.length
            ? (total >= 0 ? '+' : '−') + Math.abs(total).toLocaleString('de-DE') + ' IQD · ' + items.length + (items.length === 1 ? ' transfer' : ' transfers')
            : '',
          calEmptyDisplay: items.length ? 'none' : 'block',
          calItems: items.map(i => ({
            ini: i[0], name: i[1], sub: i[2], amt: i[3], bg: i[4], ink: i[5],
            tap: () => this.toast(i[1] + ' · ' + i[3] + ' IQD'),
          })),
        };
      })(),

      okDisplay: s.ok ? 'flex' : 'none',
      okTitle: (s.ok || {}).title || '',
      okAmount: (s.ok || {}).amount || '',
      okSub: (s.ok || {}).sub || '',
      okRows: ((s.ok || {}).rows || []).map(r => ({ label: r[0], value: r[1] })),
      okDone: () => this.setState({ ok: null }),
      okReceipt: () => this.toast('Receipt shared'),

      ...(() => {
        const o = s.order;
        const blank = { odDisplay: 'none', odHead: '', odSector: '', odMark: '', odBg: 'transparent', odPrice: '', odChg: '', odChgInk: '#8A95A2', odNet: '', odNetLabel: '', odSizes: [], odRows: [], odCta: '', odCtaBg: '#FFFFFF', odCtaInk: '#0D1B2A', odNote: '', odClose: () => {}, odConfirm: () => {} };
        if (!o) return blank;
        const sell = o.side === 'sell';
        const price = parseFloat(String(o.price || '0,650').replace(',', '.')) || 0.65;
        const holdings = { BBOB: 640000, TASC: 42000, IBSD: 68000, GOLD: 1.05 };
        const held = holdings[o.ticker] || 50000;
        const pctLabel = s.odSize || '25%';
        const frac = { '25%': 0.25, '50%': 0.5, '75%': 0.75, 'All': 1 }[pctLabel] || 0.25;
        const units = o.ticker === 'GOLD' ? +(held * frac).toFixed(2) : Math.round(held * frac);
        const gross = Math.round(units * (o.ticker === 'GOLD' ? 153143 : price));
        const fee = Math.max(1000, Math.round(gross * 0.005));
        const levy = Math.round(gross * 0.001);
        const net = sell ? gross - fee - levy : gross + fee + levy;
        const grp = (n) => n.toLocaleString('de-DE');
        const unitLabel = o.ticker === 'GOLD' ? String(units).replace('.', ',') + ' g' : grp(units) + ' shares';
        return {
          odDisplay: 'flex',
          odClose: () => this.setState({ order: null }),
          odHead: (sell ? 'Sell ' : 'Buy ') + o.ticker,
          odSector: o.sub || 'Iraq Stock Exchange',
          odMark: o.mark,
          odBg: o.bg,
          odPrice: o.ticker === 'GOLD' ? '153.143' : String(o.price || '0,650'),
          odChg: o.chg || '',
          odChgInk: o.chgInk || '#8A95A2',
          odNet: grp(net),
          odNetLabel: sell ? 'You receive after fees' : 'Total cost including fees',
          odSizes: ['25%', '50%', '75%', 'All'].map(l => ({
            label: l,
            bg: pctLabel === l ? 'rgba(255,255,255,.16)' : 'transparent',
            ink: pctLabel === l ? '#FFFFFF' : '#8A95A2',
            pick: () => this.setState({ odSize: l }),
          })),
          odRows: [
            [(sell ? 'Selling' : 'Buying'), unitLabel, '#8A95A2', '#FFFFFF', '500'],
            ['Price per ' + (o.ticker === 'GOLD' ? 'gram' : 'share'), (o.ticker === 'GOLD' ? '153.143' : String(o.price || '0,650')) + ' IQD', '#8A95A2', '#FFFFFF', '500'],
            [(sell ? 'Sale value' : 'Order value'), grp(gross) + ' IQD', '#8A95A2', '#FFFFFF', '500'],
            ['Service fee · 0,5% (min 1.000 IQD)', (sell ? '−' : '+') + grp(fee) + ' IQD', '#8A95A2', '#FF8A8A', '500'],
            ['ISX levy · 0,1%', (sell ? '−' : '+') + grp(levy) + ' IQD', '#8A95A2', '#FF8A8A', '500'],
            [(sell ? 'Net to your cash' : 'Total to pay'), grp(net) + ' IQD', '#FFFFFF', '#FFFFFF', '700'],
          ].map(r => ({ label: r[0], value: r[1], labelInk: r[2], ink: r[3], weight: r[4] })),
          odCta: (sell ? 'Confirm sale of ' : 'Confirm purchase of ') + unitLabel,
          odCtaBg: sell ? '#FFFFFF' : '#FFFFFF',
          odCtaInk: '#0D1B2A',
          odNote: 'Executes at the next Iraq Stock Exchange session · 10:00 Baghdad. Fees shown are final.',
          odConfirm: () => this.setState({
            order: null,
            ok: {
              title: sell ? 'Sell order placed' : 'Buy order placed',
              amount: grp(net) + ' IQD',
              sub: (sell ? 'Selling ' : 'Buying ') + unitLabel + ' of ' + o.ticker,
              rows: [
                ['Price per ' + (o.ticker === 'GOLD' ? 'gram' : 'share'), (o.ticker === 'GOLD' ? '153.143' : String(o.price || '0,650')) + ' IQD'],
                ['Service fee', grp(fee) + ' IQD'],
                ['ISX levy', grp(levy) + ' IQD'],
                [sell ? 'Net to your cash' : 'Total paid', grp(net) + ' IQD'],
              ],
            },
          }),
        };
      })(),
      investAdd: () => this.setState({ add: true, addEntry: '' }),
      cdHelp: () => this.toast('Card help · a specialist replies in the chat'),
      stkAlert: () => this.toast('Price alert set for this stock'),
      trDisplay: s.trade ? 'flex' : 'none',
      trClose: () => this.setState({ trade: false }),
      trCash: '128.400',
      trWithdraw: () => this.setState({ trade: false, withdraw: true, wdEntry: '' }),
      trPositions: [
        { mark: 'BB', bg: '#0E2A5C', ticker: 'BBOB', sub: 'Bank of Baghdad · 640.000 shares', value: '416.000', chg: '▲ 4,2%', chgInk: '#3FD39F' },
        { mark: 'TA', bg: '#1F6F3F', ticker: 'TASC', sub: 'Asiacell · 42.000 shares', value: '341.000', chg: '▲ 2,3%', chgInk: '#3FD39F' },
        { mark: 'IB', bg: '#8C1D2B', ticker: 'IBSD', sub: 'Baghdad Soft Drinks · 68.000 shares', value: '234.600', chg: '▼ 2,0%', chgInk: '#FF6B7A' },
        { mark: 'AU', bg: '#6B4E12', ticker: 'GOLD', sub: 'Gold · 1,05 g', value: '160.800', chg: '▲ 8,4%', chgInk: '#3FD39F' },
      ].map(p => Object.assign({}, p, {
        open: () => { this.setState({ trade: false }); this.openStock({ ticker: p.ticker, mark: p.mark, bg: p.bg, chg: p.chg, chgInk: p.chgInk }); },
        buy: () => this.openOrder('buy', p),
        sell: () => this.openOrder('sell', p),
      })),
      goCards: () => this.setState({ tab: 'cards', cardView: 'list', scroll: 0 }),
      goInvest: () => this.setState({ tab: 'invest', scroll: 0 }),
      homeTx: [
        { ini: 'CF', name: 'Ciao Cafe', sub: 'Today, 16:30 · Standard', amt: '−12.000', ink: '#FFFFFF', meta: 'Card', bg: '#2563EB' },
        { ini: 'IM', name: 'Iraq Mall', sub: 'Today, 15:48 · Pending', amt: '−64.000', ink: '#FFCE7A', meta: 'Card', bg: '#1B3FA8' },
        { ini: 'AS', name: 'Asiacell', sub: 'Today, 11:10 · Top-up', amt: '−25.000', ink: '#FFFFFF', meta: 'Mobile', bg: '#EC7E00' },
        { ini: 'SK', name: 'From Saad Kareem', sub: 'Today, 09:12 · Pending', amt: '+240.000', ink: '#FFCE7A', meta: 'Transfer', bg: '#F59E42' },
        { ini: 'HY', name: 'From Hayder', sub: 'Yesterday, 21:04', amt: '+145.000', ink: '#3FD39F', meta: 'Transfer', bg: '#7C3AED' },
        { ini: 'MK', name: 'Al Rashid Market', sub: 'Yesterday, 18:22 · Work', amt: '−38.500', ink: '#FFFFFF', meta: 'Card', bg: '#00A78F' },
      ],
      homeUpcoming: [
        { ini: 'RN', name: 'Rent · Al Mansour', sub: 'Due 1 Oct · standing order', amt: '750.000', bg: '#00C2A8' },
        { ini: 'BN', name: 'Pay later · iPhone', sub: '3 of 6 · due 18 Sep', amt: '120.000', bg: '#EC7E00' },
        { ini: 'EL', name: 'Electricity', sub: 'Due 22 Sep', amt: '46.000', bg: '#2563EB' },
      ].map(u => Object.assign({}, u, { tap: () => this.toast(u.name + ' · ' + u.amt + ' IQD') })),
      hubGroups: [
        { name: 'Daily', apps: [
          { ini: 'RW', name: 'Rewards', ink: '#FFFFFF', bg: 'linear-gradient(160deg,#3B82F6,#1D4ED8)' },
          { ini: 'GF', name: 'Gifts', ink: '#FFFFFF', bg: 'linear-gradient(160deg,#F87171,#D6455D)' },
          { ini: 'DN', name: 'Donations', ink: '#FFFFFF', bg: 'linear-gradient(160deg,#FB7185,#E11D48)' },
          { ini: 'JR', name: 'Junior', ink: '#FFFFFF', bg: 'linear-gradient(160deg,#38BDF8,#0369A1)' },
          { ini: 'PK', name: 'Pockets', ink: '#FFFFFF', bg: 'linear-gradient(160deg,#8B87F5,#5B54D6)' },
          { ini: 'LK', name: 'Linked', ink: '#FFFFFF', bg: 'linear-gradient(160deg,#A5A0F7,#6D66E0)' },
          { ini: 'PT', name: 'Points', ink: '#FFFFFF', bg: 'linear-gradient(160deg,#2563EB,#1E3A8A)' },
          { ini: 'AG', name: 'Agents', ink: '#FFFFFF', bg: 'linear-gradient(160deg,#3B82F6,#1E40AF)' },
          { ini: 'SL', name: 'Salary', ink: '#FFFFFF', bg: 'linear-gradient(160deg,#60A5FA,#2563EB)' },
          { ini: 'GB', name: 'Group bills', ink: '#FFFFFF', bg: 'linear-gradient(160deg,#3B82F6,#1D4ED8)' },
          { ini: 'CD', name: 'Cards', ink: '#FFFFFF', bg: 'linear-gradient(160deg,#1B3FA8,#101F33)' },
          { ini: 'PR', name: 'Pro', ink: '#FFFFFF', bg: 'linear-gradient(160deg,#2A2D31,#0B0D0F)' },
        ] },
        { name: 'Digital goods', apps: [
          { ini: 'GC', name: 'Gift cards', ink: '#FFFFFF', bg: 'linear-gradient(160deg,#F472B6,#BE185D)' },
          { ini: 'GM', name: 'Gaming cards', ink: '#FFFFFF', bg: 'linear-gradient(160deg,#818CF8,#4338CA)' },
          { ini: 'PS', name: 'PlayStation', ink: '#FFFFFF', bg: 'linear-gradient(160deg,#3B82F6,#1E3A8A)' },
          { ini: 'ST', name: 'Steam', ink: '#FFFFFF', bg: 'linear-gradient(160deg,#334155,#0F172A)' },
          { ini: 'GP', name: 'Google Play', ink: '#0A1420', bg: 'linear-gradient(160deg,#34D399,#047857)' },
          { ini: 'AP', name: 'App Store', ink: '#FFFFFF', bg: 'linear-gradient(160deg,#64748B,#1E293B)' },
          { ini: 'TU', name: 'Top-ups', ink: '#FFFFFF', bg: 'linear-gradient(160deg,#FB923C,#C2410C)' },
          { ini: 'ES', name: 'eSIM', ink: '#0A1420', bg: 'linear-gradient(160deg,#22D3EE,#0E7490)' },
        ] },
        { name: 'Wealth', apps: [
          { ini: 'ST', name: 'Stocks', ink: '#0A1420', bg: 'linear-gradient(160deg,#FBA94C,#EA7A11)' },
          { ini: 'GD', name: 'Gold', ink: '#0A1420', bg: 'linear-gradient(160deg,#F7B955,#D9861B)' },
          { ini: 'CM', name: 'Commodities', ink: '#0A1420', bg: 'linear-gradient(160deg,#F59E42,#C2610C)' },
          { ini: 'VA', name: 'Vaults', ink: '#0A1420', bg: 'linear-gradient(160deg,#FBBF6B,#E07C0E)' },
        ] },
        { name: 'Credit', apps: [
          { ini: 'CC', name: 'Credit cards', ink: '#FFFFFF', bg: 'linear-gradient(160deg,#14B8A6,#0B6E64)' },
          { ini: 'LN', name: 'Loans', ink: '#0A1420', bg: 'linear-gradient(160deg,#2DD4BF,#0D9488)' },
          { ini: 'CS', name: 'Credit score', ink: '#0A1420', bg: 'linear-gradient(160deg,#5EEAD4,#0F9B8E)' },
        ] },
      ],
      cardTx: CARDS[s.card].tx,
      cardScroll: (e) => {
        const el = e.currentTarget;
        const i = Math.round(el.scrollLeft / (el.clientWidth - 32 + 16));
        if (i !== this.state.card && CARDS[i]) this.setState({ card: i });
      },
      investActions: [
        { mark: '↗', label: 'Trade' },
        { mark: '+', label: 'Add money' },
        { mark: '↓', label: 'Withdraw' },
        { mark: '···', label: 'More' },
      ].map(a => Object.assign({}, a, {
        tap: a.label === 'Add money' ? () => this.setState({ add: true, addEntry: '' })
          : a.label === 'More' ? () => this.setState({ more: true })
          : a.label === 'Trade' ? () => this.setState({ trade: true })
          : () => this.setState({ withdraw: true, wdEntry: '' }),
      })),
      holdings: [
        { ini: 'GL', name: 'Gold', sub: '12,4 g', val: '620.000', chg: '+2,1%', chgInk: '#00A78F', bg: '#7C3AED' },
        { ini: 'S&', name: 'S&P 500 ETF', sub: '1,8 shares', val: '312.900', chg: '+0,8%', chgInk: '#00A78F', bg: '#2563EB' },
        { ini: 'ISX', name: 'Iraq Stock Exchange', sub: '140 shares', val: '164.500', chg: '−1,4%', chgInk: '#D6455D', bg: '#0D1B2A' },
        { ini: 'SV', name: 'Savings vault', sub: '4,2% a year', val: '85.000', chg: '+0,3%', chgInk: '#00A78F', bg: '#00C2A8' },
      ],
      popular: [
        { ini: 'GL', name: 'Gold', chg: '+2,1%', bg: '#7C3AED' },
        { ini: 'S&', name: 'S&P 500', chg: '+0,8%', bg: '#2563EB' },
        { ini: 'SV', name: 'Vault', chg: '+4,2%', bg: '#00C2A8' },
        { ini: 'BD', name: 'Bonds', chg: '+1,1%', bg: '#6B7280' },
      ],

      iraqiStocks: [
        { ini: 'BSD', name: 'Baghdad Soft Drinks', sub: 'BSD · beverages', price: '4,20', chg: '+1,9%', chgInk: '#00A78F', bg: '#2563EB' },
        { ini: 'AIB', name: 'Ashur International Bank', sub: 'BASH · banking', price: '0,35', chg: '−0,6%', chgInk: '#D6455D', bg: '#0D1B2A' },
        { ini: 'IIB', name: 'Iraqi Islamic Bank', sub: 'BIIB · banking', price: '0,52', chg: '+0,4%', chgInk: '#00A78F', bg: '#00C2A8' },
        { ini: 'HAT', name: 'Al-Hamraa Tourism', sub: 'HTVM · hospitality', price: '8,10', chg: '+3,2%', chgInk: '#00A78F', bg: '#7C3AED' },
        { ini: 'IFC', name: 'Iraqi For Carton', sub: 'IIMC · manufacturing', price: '1,64', chg: '0,0%', chgInk: '#8A95A2', bg: '#6B7280' },
      ],
      payees: [
        { ini: 'LA', name: 'Layla', bg: '#7C3AED' },
        { ini: 'OM', name: 'Omar', bg: '#2563EB' },
        { ini: 'ZA', name: 'Zain', bg: '#00C2A8' },
        { ini: 'HU', name: 'Hussein', bg: '#6B7280' },
        { ini: 'NO', name: 'Noor', bg: '#1B3FA8' },
      ],
      transferTypes: [
        { ini: 'iC', name: 'To an iCASH user', sub: 'Instant, free · phone or @tag', bg: '#2563EB' },
        { ini: 'WA', name: 'To a wallet number', sub: 'iCASH account number · instant', bg: '#0D1B2A' },
        { ini: 'IN', name: 'International', sub: '38 currencies · from 0,4%', bg: '#7C3AED' },
        { ini: 'RQ', name: 'Request money', sub: 'Send a payment link', bg: '#00C2A8' },
        { ini: 'FX', name: 'Between my accounts', sub: 'IQD ↔ USD at live rate', bg: '#6B7280' },
      ],
      openSend: () => this.setState({ send: true }),
      sendDisplay: s.send ? 'flex' : 'none',
      sendClose: () => this.setState({ send: false, sendScan: false }),
      sendScan: () => this.setState({ sendScan: true }),
      sendScanClose: () => this.setState({ sendScan: false }),
      sendScanDisplay: s.sendScan ? 'block' : 'none',
      sendShowMine: () => this.setState({ send: false, sendScan: false, qr: true }),
      sendMethods: [
        { kind: 'acct', name: 'Account number', bg: 'linear-gradient(160deg,#2563EB,#10225C)', tap: () => this.setState({ entry: 'acct', entryVal: '' }) },
        { kind: 'phone', name: 'Phone number', bg: 'linear-gradient(160deg,#00C2A8,#0A3F38)', tap: () => this.setState({ entry: 'phone', entryVal: '' }) },
        { kind: 'qr', name: 'Show my QR', bg: 'linear-gradient(160deg,#7C3AED,#2A1160)', tap: () => this.setState({ send: false, qr: true }) },
      ].map(m => Object.assign({}, m, {
        iconAcct: m.kind === 'acct' ? 'block' : 'none',
        iconPhone: m.kind === 'phone' ? 'block' : 'none',
        iconQr: m.kind === 'qr' ? 'block' : 'none',
        iconScan: m.kind === 'scan' ? 'block' : 'none',
      })),
      entryDisplay: s.entry === 'acct' || s.entry === 'phone' ? 'block' : 'none',
      entryTitle: s.entry === 'phone' ? 'Send to a phone number' : 'Send to an account number',
      entryHint: s.entry === 'phone'
        ? 'Any Iraqi mobile registered with iCASH. Arrives instantly.'
        : 'Enter at least 12 digits of the iCASH or bank account number.',
      entryPrefix: '+964',
      entryPrefixDisplay: s.entry === 'phone' ? 'block' : 'none',
      entryInk: (s.entryVal || '').length ? '#FFFFFF' : '#5E6873',
      entryValue: (() => {
        const v = s.entryVal || '';
        if (!v) return s.entry === 'phone' ? '770 000 0000' : 'IQ98 ICSH 0000 0000 0000';
        const group = s.entry === 'phone' ? [3, 3, 4] : [4, 4, 4, 4];
        const out = []; let i = 0;
        for (const g of group) { if (i >= v.length) break; out.push(v.slice(i, i + g)); i += g; }
        if (i < v.length) out.push(v.slice(i));
        return out.join(' ');
      })(),
      entryKeys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫'].map(k => ({
        label: k,
        press: () => {
          if (!k) return;
          const max = this.state.entry === 'phone' ? 10 : 20;
          this.setState(st => ({ entryVal: k === '⌫' ? (st.entryVal || '').slice(0, -1) : ((st.entryVal || '') + k).slice(0, max) }));
        },
      })),
      entryCtaBg: (s.entryVal || '').length >= (s.entry === 'phone' ? 10 : 12) ? '#FFFFFF' : 'rgba(255,255,255,.14)',
      entryCtaInk: (s.entryVal || '').length >= (s.entry === 'phone' ? 10 : 12) ? '#0D1B2A' : '#8A95A2',
      entryClose: () => this.setState({ entry: null }),
      entryConfirm: () => {
        const need = this.state.entry === 'phone' ? 10 : 12;
        if ((this.state.entryVal || '').length < need) return;
        const to = this.state.entry === 'phone' ? '+964 ' + (this.state.entryVal || '') : (this.state.entryVal || '');
        this.setState({
          entry: null, send: false, sendScan: false, entryVal: '',
          ok: { title: 'Money sent', amount: '150.000 IQD', sub: 'Sent to ' + to,
            rows: [['From', 'Main account ·· 9169'], ['Fee', 'No fee · iCASH to iCASH'], ['Reference', 'TRX 8841 0092']] },
        });
      },
      sendRecentCount: 4,
      sendRecent: [
        { ini: 'AH', name: 'Ahmed Al Janahi', sub: '+964 770 123 4567', bg: '#2563EB' },
        { ini: 'SA', name: 'Saad Kareem', sub: 'IQ98 ICSH 0085 0000 2489', bg: '#00A78F' },
        { ini: 'HY', name: 'Hayder Nouri', sub: '+964 751 998 2210', bg: '#7C3AED' },
        { ini: 'ZN', name: 'Zainab Hassan', sub: 'IQ98 ICSH 0085 0000 7742', bg: '#EC7E00' },
      ],

      lifeTabs: ['Discover', 'Miles', 'Hotels', 'Top-ups', 'Gaming', 'BNPL'].map(l => ({
        label: l,
        bg: s.life === l ? '#FFFFFF' : '#F0F2F5',
        ink: s.life === l ? '#FFFFFF' : '#4A535D',
        pick: () => this.setState({ life: l }),
      })),
      discoverDisplay: show(s.life === 'Discover'),
      servicesDisplay: show(s.life !== 'Discover'),
      milesDisplay: show(s.life === 'Miles'),
      gridDisplay: show(s.life === 'Top-ups' || s.life === 'Gaming' || s.life === 'Miles'),
      listDisplay: show(s.life === 'Hotels' || s.life === 'BNPL'),
      serviceTitle: {
        Miles: 'Earn and spend miles',
        Hotels: 'Stays in Iraq and abroad',
        'Top-ups': 'Mobile, internet and wallets',
        Gaming: 'Game credit and gift cards',
        BNPL: 'Buy now, pay later',
      }[s.life] || '',
      serviceNote: {
        Miles: 'Expires in 12 months',
        Hotels: 'Up to 10% cashback',
        'Top-ups': 'Instant delivery',
        Gaming: 'Codes by SMS',
        BNPL: '0% for 4 payments',
      }[s.life] || '',
      serviceTiles: {
        Miles: [
          { ini: 'FL', name: 'Flights', sub: 'from 12.000 mi', bg: '#2563EB' },
          { ini: 'HT', name: 'Hotels', sub: 'from 8.000 mi', bg: '#7C3AED' },
          { ini: 'LO', name: 'Lounges', sub: 'from 5.000 mi', bg: '#00C2A8' },
          { ini: 'CB', name: 'Cashback', sub: '1.500 IQD/1k', bg: '#0D1B2A' },
          { ini: 'GF', name: 'Gift a friend', sub: 'any amount', bg: '#6B7280' },
          { ini: 'DN', name: 'Donate', sub: 'to charities', bg: '#EC7E00' },
        ],
        'Top-ups': [
          { ini: 'ZC', name: 'Zain Cash', sub: 'wallet', bg: '#7C3AED' },
          { ini: 'AS', name: 'Asiacell', sub: 'mobile', bg: '#EC7E00' },
          { ini: 'KO', name: 'Korek', sub: 'mobile', bg: '#D6455D' },
          { ini: 'EL', name: 'Earthlink', sub: 'internet', bg: '#2563EB' },
          { ini: 'FF', name: 'FastLink', sub: 'internet', bg: '#00C2A8' },
          { ini: 'EL', name: 'Electricity', sub: 'utility', bg: '#0D1B2A' },
        ],
        Gaming: [
          { ini: 'PS', name: 'PS Network', sub: '10–100 USD', bg: '#2563EB' },
          { ini: 'XB', name: 'Xbox', sub: '10–100 USD', bg: '#00C2A8' },
          { ini: 'ST', name: 'Steam', sub: '20–100 USD', bg: '#0D1B2A' },
          { ini: 'GP', name: 'Google Play', sub: '10–50 USD', bg: '#7C3AED' },
          { ini: 'AP', name: 'App Store', sub: '10–50 USD', bg: '#6B7280' },
          { ini: 'RB', name: 'Roblox', sub: '10–50 USD', bg: '#EC7E00' },
        ],
      }[s.life] || [],
      serviceRows: {
        Hotels: [
          { ini: 'BR', name: 'Babylon Rotana · Baghdad', sub: '4,6 (312 reviews) · 1 night', amt: '182.000', ink: '#FFFFFF', bg: '#2563EB' },
          { ini: 'ER', name: 'Erbil Rotana · Erbil', sub: '4,5 (208 reviews) · 1 night', amt: '165.000', ink: '#FFFFFF', bg: '#7C3AED' },
          { ini: 'DU', name: 'Dubai · Marina view', sub: '4,7 (1.204 reviews) · 1 night', amt: '240.000', ink: '#FFFFFF', bg: '#00C2A8' },
        ],
        BNPL: [
          { ini: 'AC', name: 'Asiacell iPhone 15', sub: '2 of 4 payments left', amt: '312.500', ink: '#FFFFFF', bg: '#EC7E00' },
          { ini: 'MZ', name: 'Miswag order #8821', sub: '1 of 4 payments left', amt: '48.000', ink: '#FFFFFF', bg: '#2563EB' },
          { ini: 'NW', name: 'New plan', sub: 'Split any payment over 400.000 IQD', amt: 'Start', ink: '#2563EB', bg: '#0D1B2A' },
        ],
      }[s.life] || [],
      lifeTiles: [
        { ini: 'HT', name: 'Hotels', sub: 'Book stays & more', bg: '#2563EB', go: 'Hotels' },
        { ini: 'MI', name: 'Miles', sub: '18.420 collected', bg: '#7C3AED', go: 'Miles' },
        { ini: 'TU', name: 'Top-ups', sub: 'Zain Cash, Asiacell', bg: '#00C2A8', go: 'Top-ups' },
        { ini: 'GM', name: 'Gaming', sub: 'PS, Xbox, Steam', bg: '#0D1B2A', go: 'Gaming' },
        { ini: 'BN', name: 'Pay later', sub: 'Split in 4', bg: '#EC7E00', go: 'BNPL' },
        { ini: 'eS', name: 'eSIM', sub: 'Stay connected', bg: '#6B7280', go: 'Discover' },
      ].map(t => Object.assign({}, t, { pick: () => this.setState({ life: t.go }) })),
      lifeNew: [
        { slot: 'resort photo', name: 'Erbil Rotana', sub: 'Erbil · 4,5 (208)' },
        { slot: 'lounge photo', name: 'BGW Lounge', sub: 'Baghdad airport' },
      ],
    };
  }
}

export default Component;
