import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Users, DollarSign, AlertTriangle, Target, Coffee, Globe, Map, Award, BarChart3, ShoppingBag } from 'lucide-react';

const StarbucksPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      title: "STARBUCKS ARMENIA",
      subtitle: "Ռազմավարական վերլուծություն և շուկայի ներթափանցում",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Coffee className="w-32 h-32 text-green-700" />
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-green-800">STARBUCKS</h1>
            <p className="text-2xl text-gray-700">Հայաստանի շուկա</p>
            <p className="text-lg text-gray-600 mt-8">Փորթերի 5 ուժերի վերլուծություն և ռազմավարական պլանավորում</p>
          </div>
        </div>
      )
    },

    // Slide 2: Agenda
    {
      title: "Օրակարգ",
      subtitle: "Ներկայացման կառուցվածք",
      content: (
        <div className="grid grid-cols-2 gap-6 text-lg">
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="font-bold text-xl mb-4 text-green-800">Մաս I: Global Starbucks</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Ընկերության ընդհանուր նկարագիր</li>
              <li>• Փորթերի 5 ուժերի վերլուծություն</li>
              <li>• SWOT վերլուծություն</li>
              <li>• Գլոբալ ռազմավարություն</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <h3 className="font-bold text-xl mb-4 text-blue-800">Մաս II: Starbucks Armenia</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Հայաստանի սուրճի շուկա</li>
              <li>• Մրցակիցների վերլուծություն</li>
              <li>• Փորթերի 5 ուժեր ՀՀ-ում</li>
              <li>• SWOT և գնային վերլուծություն</li>
              <li>• Ռազմավարական առաջարկներ</li>
            </ul>
          </div>
        </div>
      )
    },
 
    // Slide 3: Starbucks Global Overview
    {
      title: "ՄԱՍ I: STARBUCKS GLOBAL",
      subtitle: "Ընկերության ընդհանուր նկարագիր",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-100 p-4 rounded-lg text-center">
              <Globe className="w-12 h-12 mx-auto mb-2 text-green-700" />
              <p className="text-3xl font-bold text-green-800">38,000+</p>
              <p className="text-sm text-gray-600">Խանութներ</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg text-center">
              <Map className="w-12 h-12 mx-auto mb-2 text-green-700" />
              <p className="text-3xl font-bold text-green-800">80+</p>
              <p className="text-sm text-gray-600">Երկրներ</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg text-center">
              <Users className="w-12 h-12 mx-auto mb-2 text-green-700" />
              <p className="text-3xl font-bold text-green-800">400,000</p>
              <p className="text-sm text-gray-600">Աշխատակիցներ</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3 text-green-800">Հիմնական տվյալներ</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Հիմնադրում:</strong> 1971թ., Սիեթլ, ԱՄՆ</li>
              <li><strong>CEO:</strong> Լաքսման Նարասիմհան (2023-ից)</li>
              <li><strong>Առաքելություն:</strong> "To inspire and nurture the human spirit". (Մարդկանց սիրտն ու հոգին լուսավորել:)</li>
              <li><strong>Բիզնես մոդել:</strong> 70% սեփական խանութներ, 25% Ֆրանշիզա(Franchise), 5% Մանրածախ առևտուր(Retail)</li>
            </ul>
          </div>
        </div>
      )
    },


// Slide 4: Porter's 5 Forces - Global
{
  title: "Փորթերի 5 ՈՒԺԵՐ: GLOBAL STARBUCKS",
  subtitle: "Մրցակցային միջավայրի վերլուծություն",
  content: (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h4 className="font-bold text-lg mb-2">1️⃣ Մատակարարների ուժ</h4>
          <p className="text-sm mb-2">
            <strong>Գնահատական: 3/5 (Միջին)</strong>
          </p>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>✓ Գների փոփոխականություն կլիմայական գործոններից: 1</li>
            <li>✓ Աշխարհաքաղաքական ռիսկեր մատակարարման շղթայում: 1</li>
            <li>✓ Պրեմիում նյութերի հատուկ մատակարարներ: 1</li>
            <li>✗ Դիվերսիֆիկացված գլոբալ մատակարարներ: 0</li>
            <li>✗ Էթիկական ծրագրերի առկայություն (լծակներ): 0</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-bold text-lg mb-2">2️⃣ Գնորդների ուժ</h4>
          <p className="text-sm mb-2">
            <strong>Գնահատական: 4/5 (Բարձր)</strong>
          </p>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>✓ Ցածր անցման ծախսեր այլընտրանքներին: 1</li>
            <li>✓ Գնային զգայունություն ինֆլյացիայի ժամանակ: 1</li>
            <li>✓ Առողջության միտումների ազդեցություն: 1</li>
            <li>✓ Կոլեկտիվ սպառողական միտումներ: 1</li>
            <li>✗ Ուժեղ հավատարմության ծրագրեր: 0</li>
          </ul>
        </div>

        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
          <h4 className="font-bold text-lg mb-2">3️⃣ Առկա մրցակիցներ</h4>
          <p className="text-sm mb-2">
            <strong>Գնահատական: 4/5 (Բարձր)</strong>
          </p>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>✓ Գլոբալ խաղացողների առկայություն: 1</li>
            <li>✓ Գնային պատերազմներ: 1</li>
            <li>✓ Մենյուի նորարարություններ: 1</li>
            <li>✓ Շուկայի հագեցվածություն հասուն տարածաշրջաններում: 1</li>
            <li>✗ Ուժեղ թվային էկոհամակարգ: 0</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h4 className="font-bold text-lg mb-2">4️⃣ Նոր մուտքեր</h4>
          <p className="text-sm mb-2">
            <strong>Գնահատական: 3/5 (Միջին)</strong>
          </p>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>✓ Ցածր կապիտալի պահանջներ փոքր մասնակիցների համար: 1</li>
            <li>✓ Թվային գործիքների հասանելիություն (օր.՝ առցանց վաճառք): 1</li>
            <li>✓ Վենչուրային ֆինանսավորման աճ զարգացող շուկաներում: 1</li>
            <li>✗ Բարձր բրենդի հավատարմություն հաստատված ընկերությունների համար: 0
            <li>✗ Կարգավորիչ խոչընդոտների բացակայություն գլոբալ մակարդակում: 0</li>
          </ul>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500 col-span-2">
          <h4 className="font-bold text-lg mb-2">5️⃣ Փոխարինողներ</h4>
          <p className="text-sm mb-2">
            <strong>Գնահատական: 4/5 (Բարձր)</strong>
          </p>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>✓ Առատ ոչ սուրճային խմիչքներ: 1</li>
            <li>✓ Տնային եփման մեքենաների տարածում: 1</li>
            <li>✓ Արագ սննդի ցանցերի մրցակցություն: 1</li>
            <li>✓ Հետպանդեմիկ տնային սպառման աճ: 1</li>
            <li>✗ Ուժեղ բրենդային տարբերակում: 0</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg text-center">
        <p className="font-bold text-lg">
          📊 Ընդհանուր գնահատական: 3.6/5 - Բարձր մրցակցային միջավայր, սակայն Starbucks-ն ունի ամուր դիրքեր
        </p>
      </div>
    </div>
  ),
},

    // Slide 5: SWOT Global
    {
      title: "SWOT ՎԵՐԼՈՒԾՈՒԹՅՈՒՆ: GLOBAL STARBUCKS",
      subtitle: "Ուժեղ և թույլ կողմեր, հնարավորություններ և սպառնալիքներ",
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
            <h3 className="font-bold text-xl mb-3 text-green-800 flex items-center">
              <Award className="w-6 h-6 mr-2" /> Strengths (Ուժեղ կողմեր)
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Ամենաճանաչելի սուրճի բրենդը աշխարհում</li>
              <li>✓ Ուժեղ թվային էկոհամակարգ (Rewards, Mobile Order)</li>
              <li>✓ Գլոբալ ցանց 38,000+ տեղամասով</li>
              <li>✓ Premium փորձառություն և "Third Place" կոնցեպտ</li>
              <li>✓ Կայուն մատակարարման շղթա - Coffee and Farmer Equity(C.A.F.E.)</li>
            </ul>
          </div>
          <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
            <h3 className="font-bold text-xl mb-3 text-red-800 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-2" /> Weaknesses (Թույլ կողմեր)
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✗ Բարձր գներ՝ սահմանափակում է շուկայի ծածկույթը</li>
              <li>✗ Մատակարարման շղթայի բարդություն</li>
              <li>✗ Կախվածություն ԱՄՆ շուկայից (40% եկամուտներ)</li>
              <li>✗ Օպերացիոն ծախսերի բարձր մակարդակ</li>
              <li>✗ Չափելիության մարտահրավերներ Premium-ի պահպանման հետ</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-300">
            <h3 className="font-bold text-xl mb-3 text-blue-800 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2" /> Opportunities (Հնարավորություններ)
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Ընդլայնում զարգացող շուկաներում (Ասիա, Աֆրիկա)</li>
              <li>✓ Cold Brew և RTD սեգմենտների աճ</li>
              <li>✓ Առողջ և կայուն արտադրանքների պահանջ</li>
              <li>✓ Թվայնացում և AI անհատականացում</li>
              <li>✓ Նոր ֆորմատներ` մեքենայից, առանց նստելու (drive-thru, pick-up only)</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-5 rounded-lg border-2 border-yellow-300">
            <h3 className="font-bold text-xl mb-3 text-yellow-800 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-2" /> Threats (Սպառնալիքներ)
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✗ Կլիմայական փոփոխություններ և սուրճի բերք</li>
              <li>✗ Սուրճի գների զգալի տատանումներ</li>
              <li>✗ Մրցակցության սրացում</li>
              <li>✗ Տնտեսական անկայունություն և ինֆլյացիա</li>
              <li>✗ Սպառողների նախասիրությունների փոփոխություն</li>
            </ul>
          </div>
        </div>
      )
    },

    // Slide 6: Transition to Armenia
    {
      title: "ՄԱՍ II: STARBUCKS ARMENIA",
      subtitle: "Հայաստանի շուկայի ներթափանցում",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-green-800">Starbucks-ը մտնում է Հայաստան</h2>
            <div className="bg-green-50 p-8 rounded-lg border-2 border-green-300 max-w-2xl mx-auto">
              <p className="text-xl text-gray-700 mb-4">
                Հայաստանը ներկայացնում է եզակի հնարավորություն Starbucks-ի համար՝
              </p>
              <ul className="text-left space-y-3 text-lg text-gray-700">
                <li>✓ Զարգացող սուրճի մշակույթ</li>
                <li>✓ Երիտասարդ և արևմտամետ բնակչություն</li>
                <li>✓ Աճող միջին դաս</li>
                <li>✓ Ուժեղ սուրճի ավանդույթներ</li>
                <li>✓ Սահմանափակ բրենդային մրցակցություն</li>
              </ul>
            </div>
            <p className="text-xl font-semibold text-gray-600">
              Ինչպե՞ս կդիմանա տեղական շուկան
            </p>
          </div>
        </div>
      )
    },

    // Slide 7: Armenia Coffee Market
    {
      title: "ՀԱՅԱՍՏԱՆԻ ՍՈՒՐՃԻ ՇՈՒԿԱ",
      subtitle: "Շուկայի ընդհանուր վերլուծություն",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-blue-100 p-4 rounded-lg text-center">
              <BarChart3 className="w-10 h-10 mx-auto mb-2 text-blue-700" />
              <p className="text-2xl font-bold text-blue-800">11,300</p>
              <p className="text-sm text-gray-600">Տոննա/տարի (2028)</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg text-center">
              <Users className="w-10 h-10 mx-auto mb-2 text-blue-700" />
              <p className="text-2xl font-bold text-blue-800">2.36կգ</p>
              <p className="text-sm text-gray-600">Մեկ շնչի սպառում</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg text-center">
              <TrendingUp className="w-10 h-10 mx-auto mb-2 text-blue-700" />
              <p className="text-2xl font-bold text-blue-800">0.4%</p>
              <p className="text-sm text-gray-600">Տարեկան աճ</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-3 text-gray-800">📊 Շուկայի բնութագրեր</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Կայուն պահանջարկ 2019-ից</li>
                <li>• Տաք սուրճը գերակշռող սեգմենտ է</li>
                <li>• Սուրճի սարքերի աճ՝ 13.1% տարեկան</li>
                <li>• Աճում է որակյալ սուրճի հանդեպ հետաքրքրությունը</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-3 text-gray-800">🎯 Սպառողների պրոֆիլ</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Երիտասարդ բնակչություն (18-35 տարեկան)</li>
                <li>• Աճող միջին եկամուտ</li>
                <li>• Արևմտյան ազդեցություն</li>
                <li>• Ավանդական սուրճի ուժեղ մշակույթ</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
            <h4 className="font-bold text-lg mb-3 text-amber-800">☕ Հայկական սուրճի մշակույթ</h4>
            <p className="text-sm text-gray-700">
              <strong>Սուրճ:</strong> Հայաստանում սուրճը ավելին է, քան պարզապես խմիչք։ Այն սոցիալական հավաքների կենտրոնական մասն է։
              Ավանդական հայկական սուրճը ունի խիտ հյուսվածք և ուժեղ համ։ 
              Սակայն նոր սերունդը ավելի ու ավելի հետաքրքրվում է որակյալ և արևմտյան ոճով։
            </p>
          </div>
        </div>
      )
    },

    // Slide 8: Competitors Analysis
{
  title: "ՄՐՑԱԿԻՑՆԵՐԻ ՎԵՐԼՈՒԾՈՒԹՅՈՒՆ",
  subtitle: "Հայաստանի սուրճի շուկայի խաղացողներ", 
  content: (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {/* Coffee House Company */}
        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
          <h4 className="font-bold text-lg mb-2 text-purple-800">🏪 Coffee House Company</h4>
          <p className="text-sm mb-2"><strong>Դիրք:</strong> Տեղական առաջատար</p>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• 40+ մասնաճյուղ ՀՀ-ում և շրջաններում</li>
            <li>• 230+ տեսակի խմիչքներ</li>
            <li>• Սեփական սուրճի պատրաստում (2020-ից)</li>
            <li>• Գին: 500-2000 դրամ</li>
            <li>• Loyalty ծրագիր՝ 3-10% cashback (4 մակարդակ) և լրացուցիչ բոնուսներ</li>
            <li>• Հիմնադրում՝ 2015թ.</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="font-bold text-lg mb-2 text-blue-800">💰 Cofix Armenia</h4>
          <p className="text-sm mb-2"><strong>Դիրք:</strong> Ագրեսիվ ընդլայնող</p>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• Իսրայելական Ֆրանշիզա</li>
            <li>• Ֆիքսված գներ՝ 800-2300 դրամ</li>
            <li>• 10+ մասնաճյուղ (Հյուսիսային պողոտա, Երևան Մոլ, RAU, AUA, Մեգամոլ և այլն)</li>
            <li>• Գլխավոր ֆրանշայզ՝ Galaxy Group</li>
            <li>• Նպատակ՝ ագրեսիվ ընդլայնում</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
          <h4 className="font-bold text-lg mb-2 text-green-800">☕ CoffeeShop Company</h4>
          <p className="text-sm mb-2"><strong>Դիրք:</strong> Պրեմիում սեգմենտ</p>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• 5+ պրեմիում տեղակայումներ</li>
            <li>• Նստելու հարմար տարածքներ</li>
            <li>• Եվրոպական ոճ</li>
            <li>• Գին: 1000-2500 դրամ</li>
            <li>• Նախատեսված բիզնես և աշխատանքային հանդիպումների համար</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-500">
          <h4 className="font-bold text-lg mb-2 text-amber-800">🎨 Special Segment</h4>
          <p className="text-sm mb-2"><strong>Դիրք:</strong> Բարձր որակ</p>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• Jazzve, Lumen Coffee, Vol 1, AfroLab, J Space, Ground Zero</li>
            <li>• Երրորդ ալիքի սրճարան</li>
            <li>• Մեկ երկրից ծագող հատիկներ, թարմ պատրաստում</li>
            <li>• Գին: 1200-3000 դրամ</li>
            <li>• Փոքր, բայց հավատարիմ լսարան</li>
            <li>• Հիմնականում Freelancer-ների և Coworking համայնքի համար</li>
          </ul>
        </div>
      </div>
      <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
        <h4 className="font-bold mb-2">⚠️ Ավանդական սուրճի ցանցեր</h4>
        <p className="text-sm text-gray-700">
          Coffee Shop, Impresso և բազմաթիվ փոքր սրճարաններ, որոնք մատուցում են նաև ուտելիք։ 
          Ուժեղ տեղական ներկայություն, ցածր գներ, ավանդական հայկական սուրճ։
        </p>
      </div>
    </div>
  )
},

    // Slide 9: Price Analysis
    {
      title: "ԳՆԱՅԻՆ ՎԵՐԼՈՒԾՈՒԹՅՈՒՆ",
      subtitle: "Համեմատական գնային ցանկ - Հայաստան",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-4 text-center text-gray-800">💵 Համեմատական գների աղյուսակ</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="p-3 text-left">Մրցակից</th>
                    <th className="p-3 text-center">Espresso</th>
                    <th className="p-3 text-center">Cappuccino</th>
                    <th className="p-3 text-center">Latte</th>
                    <th className="p-3 text-center">Average Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="p-3 font-semibold">Coffee House</td>
                    <td className="p-3 text-center">600 ֏</td>
                    <td className="p-3 text-center">800 ֏</td>
                    <td className="p-3 text-center">900 ֏</td>
                    <td className="p-3 text-center font-bold">766 ֏</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="p-3 font-semibold">Cofix</td>
                    <td className="p-3 text-center">800 ֏</td>
                    <td className="p-3 text-center">1000 ֏</td>
                    <td className="p-3 text-center">1000 ֏</td>
                    <td className="p-3 text-center font-bold">933 ֏</td>
                  </tr>
                  <tr className="bg-gray-50 border-b">
                    <td className="p-3 font-semibold">CoffeeShop</td>
                    <td className="p-3 text-center">800 ֏</td>
                    <td className="p-3 text-center">1100 ֏</td>
                    <td className="p-3 text-center">1300 ֏</td>
                    <td className="p-3 text-center font-bold">1066 ֏</td>
                  </tr>
                  <tr className="bg-gray-50 border-b">
                    <td className="p-3 font-semibold">Specialty (Lumen, Vol1)</td>
                    <td className="p-3 text-center">1000 ֏</td>
                    <td className="p-3 text-center">1200 ֏</td>
                    <td className="p-3 text-center">1500 ֏</td>
                    <td className="p-3 text-center font-bold">1233 ֏</td>
                  </tr>
                  <tr className="bg-green-100 border-b-2 border-green-500">
                    <td className="p-3 font-bold text-green-800">Starbucks (կանխատեսվող)</td>
                    <td className="p-3 text-center font-bold">1000 ֏</td>
                    <td className="p-3 text-center font-bold">1350 ֏</td>
                    <td className="p-3 text-center font-bold">1700 ֏</td>
                    <td className="p-3 text-center font-bold text-green-800">1350 ֏</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-blue-800">📊 Գնային դիրքավորում</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Coffee House: Budget (600-900 ֏)</li>
                <li>• Cofix: Mid-range (800-1000 ֏)</li>
                <li>• CoffeeShop: Mid-Premium (800-1300 ֏)</li>
                <li>• Specialty: Premium (1000-1500 ֏)</li>
                <li>• Starbucks: Premium+ (1000-1700 ֏)</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-amber-800">💡 Գնային ռազմավարություն</h4>
              <p className="text-sm text-gray-700">
                Starbucks-ը պետք է դիրքավորվի որպես Premium բրենդ, բայց ոչ ամենաթանկը։ 
                Կանխատեսվող գները լինելու են 20-30% բարձր Cofix-ից, 
                բայց համեմատելի Specialty սրճարանների հետ։
              </p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 10: Porter's 5 Forces Armenia
    {
      title: "PORTER-Ի 5 ՈՒԺԵՐ: ՀԱՅԱՍՏԱՆ",
      subtitle: "Մրցակցային միջավայրի վերլուծություն ՀՀ շուկայում",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-bold text-lg mb-2">1️⃣ Մատակարարների ուժ</h4>
              <p className="text-sm mb-2"><strong>Գնահատական: 2/5 (Ցածր)</strong></p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✗ Ներմուծման մրցակցային շուկա: 0</li>
                <li>✗ ԵՄ առևտրային համաձայնագրերի հեշտացում: 0</li>
                <li>✗ Տեղական դիստրիբյուտորների առատություն: 0</li>
                <li>✓ Պոտենցիալ տեղական ֆերմերների ինտեգրում: 1</li>
                <li>✓ Մատակարարման խափանումների ռիսկեր տարածաշրջանում: 1</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-lg mb-2">2️⃣ Գնորդների ուժ</h4>
              <p className="text-sm mb-2"><strong>Գնահատական: 3/5 (Միջին)</strong></p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✓ Գնային զգայունություն սպառողների շրջանում: 1</li>
                <li>✓ Ցածր անցման ծախսեր տեղական այլընտրանքներին: 1</li>
                <li>✗ Տեղական սրճարանների հավատարմություն: 0</li>
                <li>✓ Տուրիզմի ազդեցություն պրեմիում պահանջարկի վրա: 1</li>
                <li>✗ Բրենդ-գիտակցության աճ երիտասարդների մոտ: 0</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-lg mb-2">3️⃣ Առկա մրցակիցներ</h4>
              <p className="text-sm mb-2"><strong>Գնահատական: 3/5 (Միջին)</strong></p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✓ Տեղական խաղացողների գերիշխում: 1</li>
                <li>✓ Տուրիզմի աճով ուժեղացում: 1</li>
                <li>✗ Պրեմիում սեգմենտի թերզարգացածություն: 0</li>
                <li>✗ Շուկայի ոչ հագեցվածություն: 0</li>
                <li>✓ Տեղական իսկության հակազդեցություն: 1</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-lg mb-2">4️⃣ Նոր մուտքեր</h4>
              <p className="text-sm mb-2"><strong>Գնահատական: 4/5 (Բարձր)</strong></p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✓ Ցածր ստարտափ ծախսեր փոքր սրճարանների համար: 1</li>
                <li>✓ Աջակցող կառավարական քաղաքականություններ: 1</li>
                <li>✓ Աճող միջին դասակարգ և ուրբանիզացիա: 1</li>
                <li>✓ Տարածաշրջանային բրենդների արագ մուտք: 1</li>
                <li>✗ Բարձր կարգավորիչ խոչընդոտներ պրեմիում ցանցերի համար: 0</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500 col-span-2">
              <h4 className="font-bold text-lg mb-2">5️⃣ Փոխարինող ապրանքներ</h4>
              <p className="text-sm mb-2"><strong>Գնահատական: 4/5 (Բարձր)</strong></p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✓ Ավանդական հայկական սուրճի տարածվածություն: 1</li>
                <li>✗ Տնային եփման սովորություններ: 1</li>
                <li>✗ Էժան արագ սննդի տարբերակներ: 1</li>
                <li>✗ Մշակութային նախընտրություններ սոցիալական վայրերի համար: 1</li>
                <li>✗ Պրեմիում սուրճի աճող պահանջարկ: 0</li>
              </ul>
            </div>
          </div>
          <div className="bg-red-100 p-4 rounded-lg text-center border-2 border-red-400">
            <p className="font-bold text-lg text-red-800">📊 Ընդհանուր գնահատական: 3.2/5 - Starbucks-ի դիրքը շատ դժվար է Հայաստանի շուկայում։</p>
            <p className="text-sm text-gray-700 mt-2">Starbucks-ի մուտքը կարող է խախտել տեղականները, սակայն հաջողությունը կախված է մշակութային նախընտրություններին հարմարվելուց (օրինակ՝ հայկական համերով ինտեգրումից):</p>
          </div>
        </div>
      )
    },

    // Slide 11: SWOT Armenia
    {
      title: "SWOT ՎԵՐԼՈՒԾՈՒԹՅՈՒՆ: STARBUCKS ARMENIA",
      subtitle: "Հայաստանի շուկայի առանձնահատկություններ",
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
            <h3 className="font-bold text-xl mb-3 text-green-800">✅ Strengths (Ուժեղ կողմեր)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Համաշխարհային ճանաչելիություն և վստահելիություն</li>
              <li>✓ Premium բրենդային արժեք</li>
              <li>✓ Գլոբալ մատակարարման շղթա և փորձառություն</li>
              <li>✓ Թվային էկոհամակարգ (Հավատարմության հավելված)</li>
              <li>✓ Մեծ մարքեթինգային բյուջե</li>
              <li>✓ Կորպորատիվ կուլտուրա և սպասարկման ստանդարտներ</li>
            </ul>
          </div>
          <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
            <h3 className="font-bold text-xl mb-3 text-red-800">⚠️ Weaknesses (Թույլ կողմեր)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✗ Բարձր գներ՝ փոքր և գնազգայուն շուկայի համար</li>
              <li>✗ Անծանոթություն տեղական սպառողական վարքագծի հետ</li>
              <li>✗ Բարձր գործառնական ծախսեր</li>
              <li>✗ Տեղական ներկայության և փորձի բացակայություն</li>
              <li>✗ Ավանդական հայկական սուրճից տարբեր արտադրանք</li>
              <li>✗ Լեզվային և մշակութային հարմարեցման անհրաժեշտություն</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-300">
            <h3 className="font-bold text-xl mb-3 text-blue-800">🚀 Opportunities (Հնարավորություններ)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Առաջին միջազգային premium սուրճի ցանցը</li>
              <li>✓ Երիտասարդ և արևմտամետ սպառողներ</li>
              <li>✓ Աճող միջին դաս և գնողունակություն</li>
              <li>✓ Զբոսաշրջություն (Սփյուռք, օտարերկրյա հյուրեր)</li>
              <li>✓ Համատեղ աշխատանքի տարածքների զարգացում</li>
              <li>✓ Սոցիալական ցանցերի ազդեցություն և տեսողական գրավչություն</li>
              <li>✓ Համագործակցություն տեղական բիզնեսների հետ</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-5 rounded-lg border-2 border-yellow-300">
            <h3 className="font-bold text-xl mb-3 text-yellow-800">⛔ Threats (Սպառնալիքներ)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✗ Coffee House-ի ուժեղ դիրքերը և տեղական հավատարմությունը</li>
              <li>✗ Cofix-ի գնային ագրեսիվություն</li>
              <li>✗ Տնտեսական անկայունություն</li>
              <li>✗ Դրամի փոխարժեքային տատանումներ</li>
              <li>✗ Ավանդական սուրճի նախապատվությունը</li>
              <li>✗ Լիցենզավորման և կարգավորման բարդություններ</li>
              <li>✗ Գեոպոլիտիկական ռիսկեր</li>
            </ul>
          </div>
        </div>
      )
    },

    // Slide 12: Strategic Recommendations
    {
      title: "ՌԱԶՄԱՎԱՐԱԿԱՆ ԱՌԱՋԱՐԿՆԵՐ",
      subtitle: "Starbucks Armenia - Հաջողության ռազմավարություն",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-2 border-green-400">
              <h4 className="font-bold text-lg mb-3 text-green-800 flex items-center">
                <Target className="w-6 h-6 mr-2" /> 1. Խելացի մուտք և դիրքավորում
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>🏢 Ֆրանչիզ մոդել:</strong> Տեղական գործընկերների հետ</li>
                <li><strong>📍 Տեղակայում:</strong> Հյուսիսային պողոտա, Կասկադ, Մոլլ-եր</li>
                <li><strong>🎯 Թիրախ:</strong> 18-40 տարեկան քաղաքային մասնագետներ</li>
                <li><strong>🌟 Դիրքավորում:</strong> "Միջազգային պրեմիում կենսակերպի ապրանքանիշ"</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-2 border-blue-400">
              <h4 className="font-bold text-lg mb-3 text-blue-800 flex items-center">
                <DollarSign className="w-6 h-6 mr-2" /> 2. Գնային ռազմավարություն
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>💵 Գնային ռազմավարություն:</strong> 10-15% զեղչ առաջին 3 ամիս</li>
                <li><strong>🎁 Հավատարմության ծրագիր:</strong> Հայկական տարբերակով հավելված</li>
                <li><strong>📱 Թվային առաջատար:</strong> Հավելվածի վրա հիմնված պատվեր և քեշբեք</li>
                <li><strong>🎓 Ուսանողական զեղչեր:</strong> 15-20% երեկոյան ժամերին</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border-2 border-purple-400">
              <h4 className="font-bold text-lg mb-3 text-purple-800 flex items-center">
                <Coffee className="w-6 h-6 mr-2" /> 3. Տեղայնացված մենյու
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>☕ Հայկական սուրճ:</strong> Սև սուրճի տարբերակ</li>
                <li><strong>🍰 Տեղայնացված մենյու:</strong> Գաթա, պախլավա ինտեգրացիա</li>
                <li><strong>🌿 Հայկական բույսեր:</strong> Թարխուն, նանա, ուրց</li>
                <li><strong>🍂 Սեզոնային թարմություն:</strong> Գարնանային համ աշնանը</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-lg border-2 border-amber-400">
              <h4 className="font-bold text-lg mb-3 text-amber-800 flex items-center">
                <Users className="w-6 h-6 mr-2" /> 4. Մարքեթինգ և համայնք
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>📸 Մարքեթինգային մոտեցում:</strong> սոցիալական մեդիա</li>
                <li><strong>🎨 Տեղական արվեստագետներ:</strong> Խանութներում արվեստի ցուցադրում</li>
                <li><strong>🤝 Համայնքային միջոցառումներ:</strong> Հայաստանի ֆերմերներին աջակցություն</li>
                <li><strong>🎪 Միջոցառումներ:</strong> Ամսական ճանաչողության միջոցառումներ</li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-5 rounded-lg text-white">
            <h4 className="font-bold text-xl mb-3 text-center">🎯 Առաջին 12 ամիսների նպատակներ</h4>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold">3-5</p>
                <p className="text-sm">Մասնաճյուղեր</p>
              </div>
              <div>
                <p className="text-3xl font-bold">10,000+</p>
                <p className="text-sm">Հավատարմության անդամներ</p>
              </div>
              <div>
                <p className="text-3xl font-bold">40%</p>
                <p className="text-sm">Պատվերներ հավելվածով</p>
              </div>
              <div>
                <p className="text-3xl font-bold">25%</p>
                <p className="text-sm">Շուկայի բաժին պրեմիում սեգմենտում</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 13: Implementation Roadmap
    {
      title: "ԻՐԱԿԱՆԱՑՄԱՆ ՃԱՆԱՊԱՐՀԱՅԻՆ ՔԱՐՏԵԶ",
      subtitle: "6-12 ամիսների պլան",
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-lg mb-2">📅 Փուլ 1: Նախապատրաստում (0-2 ամիս)</h4>
              <ul className="text-sm space-y-1 text-gray-700 ml-4">
                <li>• Գործընկերների ընտրություն և իրավական համաձայնագրեր</li>
                <li>• Շուկայի խորը հետազոտություն և ֆոկուս խմբեր</li>
                <li>• Իրավական և կարգավորող հարցերի լուծում</li>
                <li>• Մատակարարման շղթայի ստեղծում (ներմուծում, պահեստ)</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-lg mb-2">📅 Փուլ 2: Փորձնական բացում (3-4 ամիս)</h4>
              <ul className="text-sm space-y-1 text-gray-700 ml-4">
                <li>• Առաջին մասնաճյուղ՝ Հյուսիսային պողոտայում</li>
                <li>• Փորձարկման շրջան՝ VIP հրավիրյալների համար</li>
                <li>• Հավելվածի Հայկական տարբերակի թողարկում</li>
                <li>• Սոցիալական մեդիա և PR արշավ</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-lg mb-2">📅 Փուլ 3: Պաշտոնական բացում (5-6 ամիս)</h4>
              <ul className="text-sm space-y-1 text-gray-700 ml-4">
                <li>• Պաշտոնական բացում՝ մեդիա ծածկույթով</li>
                <li>• Բացման շաբաթվա ակցիաներ: 20% զեղչ, անվճար համտես</li>
                <li>• Սոցիալական ցանցերում ազդեցիկ մարդկանց հետ համագործակցություններ</li>
                <li>• Համայնքային միջոցառում: Հայկական սուրճի փառատոն</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
              <h4 className="font-bold text-lg mb-2">📅 Փուլ 4: Ընդլայնում (7-12 ամիս)</h4>
              <ul className="text-sm space-y-1 text-gray-700 ml-4">
                <li>• 2-3 լրացուցիչ մասնաճյուղեր (Կասկադ, Դալմա գարդեն մոլլ)</li>
                <li>• Զեղչերի ծրագրի բարելավում՝ տվյալների վերլուծությամբ։</li>
                <li>• Նոր սեզոնային մենյու և տեղական համագործակցություններ</li>
                <li>• B2B համագործակցություններ (կորպորատիվ հաշիվներ, համալսարաններ)</li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 rounded-lg text-white">
            <h4 className="font-bold text-center mb-2">⚠️ Հիմնական ռիսկեր և մեղմացման միջոցներ</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-semibold">Ռիսկ:</p>
                <p>Գների անընդունելիություն</p>
              </div>
              <div>
                <p className="font-semibold">Մեղմացում:</p>
                <p>Ճկուն գնագոյացում,հատուկ առաջարկներ,արժեքի ներկայացում</p>
              </div>
              <div>
                <p className="font-semibold">Ռիսկ:</p>
                <p>Տեղական մրցակիցների հակազդեցություն</p>
              </div>
              <div>
                <p className="font-semibold">Մեղմացում:</p>
                <p>Տարբերակում ոչ միայն ապրանքի նաև փորձի միջոցով</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 14: Financial Projections
    {
      title: "ՖԻՆԱՆՍԱԿԱՆ ԿԱՆԽԱՏԵՍՈՒՄՆԵՐ",
      subtitle: "Առաջին 12 ամիսների պլան",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-100 p-5 rounded-lg text-center border-2 border-blue-400">
              <DollarSign className="w-12 h-12 mx-auto mb-2 text-blue-700" />
              <p className="text-3xl font-bold text-blue-800">$800K</p>
              <p className="text-sm text-gray-600">Սկզբնական ներդրում</p>
              <p className="text-xs text-gray-500 mt-2">Մեկ մասնաճյուղի համար</p>
            </div>
            <div className="bg-green-100 p-5 rounded-lg text-center border-2 border-green-400">
              <TrendingUp className="w-12 h-12 mx-auto mb-2 text-green-700" />
              <p className="text-3xl font-bold text-green-800">$1.2M</p>
              <p className="text-sm text-gray-600">Տարեկան եկամուտ նպատակ</p>
              <p className="text-xs text-gray-500 mt-2">3 մասնաճյուղի համար</p>
            </div>
            <div className="bg-purple-100 p-5 rounded-lg text-center border-2 border-purple-400">
              <BarChart3 className="w-12 h-12 mx-auto mb-2 text-purple-700" />
              <p className="text-3xl font-bold text-purple-800">18-24</p>
              <p className="text-sm text-gray-600">Ներդրման վերադարձ (ամիս)</p>
              <p className="text-xs text-gray-500 mt-2">Մեկ մասնաճյուղ</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md">
            <h4 className="font-bold text-xl mb-4 text-gray-800">💰 Եկամուտների կանխատեսում (մեկ խանութ/ամիս)</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-gray-700 mb-2">Ելքային ենթադրություններ:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Օրական հաճախորդներ: 370-420</li>
                  <li>• Միջին վաճառք: 1 467 ֏ (~$3.7)</li>
                  <li>• Աշխատանքային օրեր: 30/ամիս</li>
                  <li>• Բեռնվածություն: 70-85%</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-700 mb-2">Ամսական ֆինանսներ:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Եկամուտ: ~18M ֏ ($45K) մեկ մասնաճյուղի համար</li>
                  <li>• Արտադրական ծախս COGS: 30% (~5.4M ֏)</li>
                  <li>• Օպերացիոն: 40% (~7.2M ֏)</li>
                  <li>• Զուտ շահույթ: 20-28% (~3.5–4.5M ֏ ամսական)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-lg border-2 border-amber-400">
            <h4 className="font-bold text-lg mb-3 text-amber-800">📈 Աճի ցուցանիշներ</h4>
            <div className="grid grid-cols-3 gap-3 text-sm text-center">
              <div>
                <p className="font-bold text-2xl text-amber-700">Q1</p>
                <p className="text-gray-600">Ամիս 1-3</p>
                <p className="text-xs mt-1">40-60% բեռնվածություն, փորձնական փուլ</p>
              </div>
              <div>
                <p className="font-bold text-2xl text-amber-700">Q2-Q3</p>
                <p className="text-gray-600">Ամիս 4-9</p>
                <p className="text-xs mt-1">70-80% բեռնվածություն, եկամուտների կայունացում</p>
              </div>
              <div>
                <p className="font-bold text-2xl text-amber-700">Q4</p>
                <p className="text-gray-600">Ամիս 10-12</p>
                <p className="text-xs mt-1">85%+ բեռնվածություն և բարձր հավատարմություն</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 15: Comparison Matrix
    {
      title: "ՀԱՄԵՄԱՏԱԿԱՆ ՄԱՏՐԻՑ",
      subtitle: "Starbucks vs Հայկական մրցակիցներ",
      content: (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-3 text-left border">Պարամետր</th>
                  <th className="p-3 text-center border">Coffee House</th>
                  <th className="p-3 text-center border">Cofix</th>
                  <th className="p-3 text-center border">CoffeeShop</th>
                  <th className="p-3 text-center border bg-green-700">Starbucks</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="bg-white">
                  <td className="p-2 font-semibold border">Բրենդի ճանաչելիություն</td>
                  <td className="p-2 text-center border">🟢🟢🟢⚪⚪</td>
                  <td className="p-2 text-center border">🟢🟢⚪⚪⚪</td>
                  <td className="p-2 text-center border">🟢🟢⚪⚪⚪</td>
                  <td className="p-2 text-center border bg-green-50">🟢🟢🟢🟢🟢</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 font-semibold border">Գնային մատչելիություն</td>
                  <td className="p-2 text-center border">🟢🟢🟢🟢🟢</td>
                  <td className="p-2 text-center border">🟢🟢🟢🟢⚪</td>
                  <td className="p-2 text-center border">🟢🟢🟢⚪⚪</td>
                  <td className="p-2 text-center border bg-green-50">🟢🟢⚪⚪⚪</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-2 font-semibold border">Արտադրանքի որակ</td>
                  <td className="p-2 text-center border">🟢🟢⚪⚪⚪</td>
                  <td className="p-2 text-center border">🟢🟢🟢⚪⚪</td>
                  <td className="p-2 text-center border">🟢🟢🟢🟢⚪</td>
                  <td className="p-2 text-center border bg-green-50">🟢🟢🟢🟢🟢</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 font-semibold border">Տեղակայումներ</td>
                  <td className="p-2 text-center border">🟢🟢🟢🟢🟢</td>
                  <td className="p-2 text-center border">🟢🟢🟢⚪⚪</td>
                  <td className="p-2 text-center border">🟢🟢⚪⚪⚪</td>
                  <td className="p-2 text-center border bg-green-50">🟢⚪⚪⚪⚪</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-2 font-semibold border">Մթնոլորտ/Փորձառություն</td>
                  <td className="p-2 text-center border">🟢🟢🟢⚪⚪</td>
                  <td className="p-2 text-center border">🟢🟢⚪⚪⚪</td>
                  <td className="p-2 text-center border">🟢🟢🟢🟢⚪</td>
                  <td className="p-2 text-center border bg-green-50">🟢🟢🟢🟢🟢</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 font-semibold border">Թվային էկոհամակարգ</td>
                  <td className="p-2 text-center border">🟢🟢🟢⚪⚪</td>
                  <td className="p-2 text-center border">🟢🟢🟢⚪⚪</td>
                  <td className="p-2 text-center border">🟢⚪⚪⚪⚪</td>
                  <td className="p-2 text-center border bg-green-50">🟢🟢🟢🟢🟢</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-2 font-semibold border">Հավատարմության ծրագիր</td>
                  <td className="p-2 text-center border">🟢🟢🟢⚪⚪</td>
                  <td className="p-2 text-center border">🟢🟢🟢⚪⚪</td>
                  <td className="p-2 text-center border">🟢⚪⚪⚪⚪</td>
                  <td className="p-2 text-center border bg-green-50">🟢🟢🟢🟢🟢</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 font-semibold border">Տեղական ինտեգրում</td>
                  <td className="p-2 text-center border">🟢🟢🟢🟢🟢</td>
                  <td className="p-2 text-center border">🟢🟢🟢⚪⚪</td>
                  <td className="p-2 text-center border">🟢🟢🟢🟢⚪</td>
                  <td className="p-2 text-center border bg-green-50">🟢⚪⚪⚪⚪</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-400">
              <h4 className="font-bold mb-2 text-green-800">✅ Starbucks-ի մրցակցային առավելություններ</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Համաշխարհային բրենդ և վստահելիություն</li>
                <li>• Premium փորձառություն և մթնոլորտ</li>
                <li>• Զարգացած թվային էկոհամակարգ</li>
                <li>• Ստանդարտացված բարձր որակ</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-400">
              <h4 className="font-bold mb-2 text-red-800">⚠️ Մրցակցային թույլ կողմեր</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Բարձր գներ և սահմանափակ մատչելիություն</li>
                <li>• Տեղակայումների սահմանափակ ցանց</li>
                <li>• Թույլ տեղական ինտեգրում (սկզբում)</li>
                <li>• Անծանոթություն ՀՀ շուկայի հետ</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 16: Key Success Factors
    {
      title: "ՀԱՋՈՂՈՒԹՅԱՆ ՀԻՄՆԱԿԱՆ ԳՈՐԾՈՆՆԵՐ",
      subtitle: "Ինչն է պետք անել ճիշտ",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-5 rounded-lg shadow-md">
              <h4 className="font-bold text-xl mb-3 text-blue-800 flex items-center">
                <Target className="w-6 h-6 mr-2" />
                1. Ճիշտ դիրքավորում
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Խնդիր:</strong> Ոչ այնքան թանկ, որ անմատչելի լինի, բայց բավական բարձրակարգ, որ բրենդը պահպանի արժեքը։
              </p>
              <p className="text-sm text-gray-700">
                <strong>Լուծում:</strong> Հասանելի շքեղություն - հասանելի ճոխություն, ոչ ամենօրյա, այլ հատուկ պահերի համար։
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-green-200 p-5 rounded-lg shadow-md">
              <h4 className="font-bold text-xl mb-3 text-green-800 flex items-center">
                <Coffee className="w-6 h-6 mr-2" />
                2. Տեղայնացում
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Խնդիր:</strong> Հայաստանը ունի իր սուրճի մշակույթը և սովորությունները։
              </p>
              <p className="text-sm text-gray-700">
                <strong>Լուծում:</strong> Հայկական բույսեր, ավանդական սուրճ մենյուում, տեղական խմորեղեն, հայերեն անհատականացում։
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-5 rounded-lg shadow-md">
              <h4 className="font-bold text-xl mb-3 text-purple-800 flex items-center">
                <Users className="w-6 h-6 mr-2" />
                3. Համայնքի ստեղծում
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Խնդիր:</strong> Coffee House-ը արդեն ունի հավատարիմ հաճախորդների համայնք։
              </p>
              <p className="text-sm text-gray-700">
                <strong>Լուծում:</strong> Կազմակերպել միջոցառումներ, ցուցահանդեսներ, coworking տարածքներ, սոցիալական նախագծեր և վիզուալ գրավիչ մթնոլորտ, որը կդառնա հանդիպման վայր երիտասարդների համար։
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-5 rounded-lg shadow-md">
              <h4 className="font-bold text-xl mb-3 text-amber-800 flex items-center">
                <ShoppingBag className="w-6 h-6 mr-2" />
                4. Բազմալիք փորձառություն
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Խնդիր:</strong> Երիտասարդ սպառողները սպասում են թվային, արագ և հարմար փորձառություն։
              </p>
              <p className="text-sm text-gray-700">
                <strong>Լուծում:</strong> Ստեղծել Starbucks Armenia Rewards հավելված, ապահովել բջջային պատվերներ, առաքման գործընկերություն (Yandex, Glovo) և անկանխիկ վճարումներ։
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 rounded-lg text-white">
            <h4 className="font-bold text-2xl mb-4 text-center">🎯 The Winning Formula</h4>
            <p className="text-center text-lg mb-3">
              Համաշխարհային բրենդ + Հայկական սիրտ + Թվային գերազանցություն + Համայնքային կենտրոնացում = Հաջողություն Հայաստանում
            </p>
            <div className="grid grid-cols-4 gap-3 text-center text-sm mt-4">
              <div className="bg-white bg-opacity-20 p-3 rounded">
                <p className="font-bold">Միջազգային</p>
                <p className="text-xs">վստահելիություն</p>
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded">
                <p className="font-bold">Հայկական</p>
                <p className="text-xs">համեր</p>
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded">
                <p className="font-bold">Թվային</p>
                <p className="text-xs">առաջատար մոտեցում</p>
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded">
                <p className="font-bold">Համայնքային</p>
                <p className="text-xs">ուղղվածություն</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 17: Risks & Mitigation
    {
      title: "ՌԻՍԿԵՐԻ ԿԱՌԱՎԱՐՈՒՄ",
      subtitle: "Պոտենցիալ խնդիրներ և լուծումներ",
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-800 mb-2">🚨 Ռիսկ 1: Գնային անընդունելիություն</h4>
              <p className="text-sm text-gray-700 mb-2"><strong>Հավանականություն:</strong> Բարձր (70%)</p>
              <p className="text-sm text-gray-600 mb-2">Հայկական սպառողները կարող են սկզբնական փուլում գները համարել չափազանց բարձր։</p>
              <div className="bg-green-100 p-2 rounded mt-2">
                <p className="text-xs font-semibold text-green-800">Մեղմացում:</p>
                <ul className="text-xs text-gray-700 ml-3 mt-1">
                  <li>• Երջանիկ ժամեր՝ 20-30% զեղչերով</li>
                  <li>• Ուսանողական և կորպորատիվ զեղչեր</li>
                  <li>• Արժեքի հաղորդակցում՝ որակ, փորձառություն, կայունություն</li>
                  <li>• Փոքր չափաբաժինների տարբերակ</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-800 mb-2">🚨 Ռիսկ 2: Coffee House-ի հակազդեցություն</h4>
              <p className="text-sm text-gray-700 mb-2"><strong>Հավանականություն:</strong> Շատ բարձր (90%)</p>
              <p className="text-sm text-gray-600 mb-2">Տեղական լիդերը կարող է սկսել գնային պատերազմ կամ նմանատիպ փորձառություններ առաջարկել։</p>
              <div className="bg-green-100 p-2 rounded mt-2">
                <p className="text-xs font-semibold text-green-800">Մեղմացում:</p>
                <ul className="text-xs text-gray-700 ml-3 mt-1">
                  <li>• Տարբերակվել միջազգային բրենդով և թվային մոդելով</li>
                  <li>• Չմրցել գներով, մրցել փորձառությամբ</li>
                  <li>• Հնարավոր համագործակցություն՝ մրցակցության փոխարեն</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-800 mb-2">🚨 Ռիսկ 3: Տնտեսական անկայունություն</h4>
              <p className="text-sm text-gray-700 mb-2"><strong>Հավանականություն:</strong> Միջին (50%)</p>
              <p className="text-sm text-gray-600 mb-2">Դրամի արժեզրկում, գնաճ և եկամուտների նվազում կարող են սահմանափակել պահանջարկը։</p>
              <div className="bg-green-100 p-2 rounded mt-2">
                <p className="text-xs font-semibold text-green-800">Մեղմացում:</p>
                <ul className="text-xs text-gray-700 ml-3 mt-1">
                  <li>• Ճկուն գնային քաղաքականություն</li>
                  <li>• Հնարավոր վճարումներ AMD/USD տարբերակով</li>
                  <li>• Կենտրոնացում արժեքի վրա՝ ոչ շքեղության</li>
                  <li>• Հավատարմության ծրագրեր հաճախորդների պահման համար</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-800 mb-2">🚨 Ռիսկ 4: Մշակութային անհամապատասխանություն</h4>
              <p className="text-sm text-gray-700 mb-2"><strong>Հավանականություն:</strong> Միջին (40%)</p>
              <p className="text-sm text-gray-600 mb-2">Ամերիկյան սուրճի մշակույթը կարող է տարբեր լինել հայկական ավանդույթներից։</p>
              <div className="bg-green-100 p-2 rounded mt-2">
                <p className="text-xs font-semibold text-green-800">Մեղմացում:</p>
                <ul className="text-xs text-gray-700 ml-3 mt-1">
                  <li>• Հայկական սուրճ մենյուում</li>
                  <li>• Օգտագործել տեղական համեր և բաղադրիչներ</li>
                  <li>• Հայերեն սպասարկում և անհատականացում</li>
                  <li>• Հայկական սուրճի մշակույթի նկատմամբ հարգալից մոտեցում</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <h4 className="font-bold text-xl mb-2 text-center">⚖️ Ընդհանուր ռիսկի գնահատում</h4>
            <p className="text-center text-sm">
              Բարձր ռիսկայնություն, սակայն լիովին կառավարելի՝ ճիշտ ռազմավարության դեպքում։ 
              Հաջողության հավանականություն: <span className="text-green-400 font-bold">65-70%</span> առաջին 2 տարում։
            </p>
          </div>
        </div>
      )
    },

    // Slide 18: Final Conclusion
    {
      title: "ԵԶՐԱՓԱԿԻՉ ԵԶՐԱԿԱՑՈՒԹՅՈՒՆ",
      subtitle: "Պետք է մտնել՞ Starbucks-ը Հայաստանի շուկա",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-400">
              <h3 className="font-bold text-2xl mb-4 text-green-800 flex items-center">
                <Award className="w-8 h-8 mr-2" />
                ԱՅՈ, եթե...
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Ճիշտ գործընկեր ընտրենք և կիրառենք ֆրանչայզային մոդել</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Լուրջ ներդրում արվի տեղայնացման և հայկական բովանդակության մեջ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Իրականացվի թվային առաջնահերթ ռազմավարություն</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Ստեղծվի համայնք և սոցիալական արժեք</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Ընկերությունը գործի համբերատար և երկարաժամկետ ռազմավարությամբ</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-400">
              <h3 className="font-bold text-2xl mb-4 text-red-800 flex items-center">
                <AlertTriangle className="w-8 h-8 mr-2" />
                ՈՉ, եթե...
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span>
                  <span>Ակնկալվի արագ եկամտաբերություն (ROI) մինչև 12 ամիս</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span>
                  <span>Պահպանվի միայն գլոբալ ստանդարտ մոդելը՝ առանց տեղայնացման</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span>
                  <span>Անտեսվի գնային զգայունությունը</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span>
                  <span>Փորձենք ուղղակիորեն մրցել Coffee House-ի հետ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span>
                  <span>Չստեղծվի իրական տարբերակիչ արժեք կամ փորձառություն</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 p-8 rounded-lg text-white text-center">
            <h3 className="text-3xl font-bold mb-4">📢 ՄԵՐ ՎԵՐՋՆԱԿԱՆ ԱՌԱՋԱՐԿԸ</h3>
            <p className="text-xl mb-4">
              Starbucks-ը <span className="font-bold underline">ՊԵՏՔ Է</span> մտնի Հայաստանի շուկա, 
              բայց <span className="font-bold underline">ՈՉ</span> որպես հերթական սրճարան։
            </p>
            <p className="text-lg mb-6">
              Այն պետք է դիրքավորվի որպես <strong>կյանքի ոճի վայր</strong>, 
              որտեղ համադրվում են գլոբալ ստանդարտները և հայկական հոգևոր արժեքները։
            </p>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <p className="text-2xl font-bold">3-5</p>
                <p className="text-sm">Մասնաճյուղեր 1-ին տարում</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <p className="text-2xl font-bold">$3-4M</p>
                <p className="text-sm">Ներդրում 3 տարում</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <p className="text-2xl font-bold">25%+</p>
                <p className="text-sm">Պրեմիում սեգմենտում</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-400 text-center">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              💡 Հիմնական գաղափար
            </p>
            <p className="text-gray-700">
              Հաջողությունը կախված է ոչ թե միայն ապրանքից, այլ <strong>փորձառությունից, 
              համայնքից և հայկական արժեքների հարգանքից</strong>։
            </p>
          </div>
        </div>
      )
    },

    // Slide 19: Q&A
    {
      title: "ՀԱՐՑԵՐ ԵՎ ՊԱՏԱՍԽԱՆՆԵՐ",
      subtitle: "Շնորհակալություն ուշադրության համար",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Coffee className="w-32 h-32 text-green-700 animate-pulse" />
          <h2 className="text-5xl font-bold text-green-800">Հարցե՞ր</h2>
          <div className="bg-green-50 p-8 rounded-lg border-2 border-green-300 max-w-3xl">
            <h3 className="font-bold text-2xl mb-4 text-center text-gray-800">Թիմ</h3>
            <div className="grid grid-cols-2 gap-4 text-center text-gray-700">
              <div>
                <p className="font-semibold">Հայկ</p>
                <p className="text-sm">Գլոբալ նկարագիր և հաջողության գործոններ</p>
              </div>
              <div>
                <p className="font-semibold">Ռաիսա</p>
                <p className="text-sm">SWOT վերլուծություն և ապրանքային շուկա</p>
              </div>
              <div>
                <p className="font-semibold">Անի</p>
                <p className="text-sm">Հայաստանի շուկա և ֆինանսական վերլուծություն</p>
              </div>
              <div>
                <p className="font-semibold">Սրբուհի</p>
                <p className="text-sm">Մրցակիցների և համեմատական մատրից վերլուծություն</p>
              </div>
              <div>
                <p className="font-semibold">Հասմիկ</p>
                <p className="text-sm">Փորթերի-ի 5 ուժեր և ռիսկերի կառավարում</p>
              </div>
              <div>
                <p className="font-semibold">Հրանտ</p>
                <p className="text-sm">Ներածություն, ռազմավարություն և եզրակացություն</p>
              </div>
            </div>
          </div>
          <p className="text-xl text-gray-600">
            Շնորհակալություն ուշադրության համար! ☕
          </p>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Presentation Screen */}
        <div className="bg-white rounded-xl shadow-2xl p-8 mb-6 min-h-[600px]">
          {/* Header */}
          <div className="border-b-4 border-green-600 pb-4 mb-6">
            <h1 className="text-3xl font-bold text-green-800">{slides[currentSlide].title}</h1>
            <p className="text-lg text-gray-600 mt-2">{slides[currentSlide].subtitle}</p>
          </div>
          
          {/* Content */}
          <div className="min-h-[400px]">
            {slides[currentSlide].content}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between bg-white rounded-lg shadow-lg p-4">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-green-700 transition"
          >
            <ChevronLeft className="w-5 h-5" />
            Նախորդ
          </button>

          {/* Slide Indicators */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 mr-4">
              {currentSlide + 1} / {slides.length}
            </span>
            <div className="flex gap-1">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition ${
                    index === currentSlide ? 'bg-green-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-green-700 transition"
          >
            Հաջորդ
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Navigation */}
        <div className="mt-4 bg-white rounded-lg shadow-lg p-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Արագ անցում:</p>
          <div className="grid grid-cols-4 gap-2 text-xs">
            <button onClick={() => goToSlide(0)} className="p-2 bg-green-100 hover:bg-green-200 rounded">Title</button>
            <button onClick={() => goToSlide(2)} className="p-2 bg-green-100 hover:bg-green-200 rounded">Global Overview</button>
            <button onClick={() => goToSlide(4)} className="p-2 bg-green-100 hover:bg-green-200 rounded">SWOT Global</button>
            <button onClick={() => goToSlide(6)} className="p-2 bg-blue-100 hover:bg-blue-200 rounded">Armenia Intro</button>
            <button onClick={() => goToSlide(7)} className="p-2 bg-blue-100 hover:bg-blue-200 rounded">Armenia Market</button>
            <button onClick={() => goToSlide(9)} className="p-2 bg-blue-100 hover:bg-blue-200 rounded">Porter's 5 (AM)</button>
            <button onClick={() => goToSlide(11)} className="p-2 bg-blue-100 hover:bg-blue-200 rounded">Recommendations</button>
            <button onClick={() => goToSlide(17)} className="p-2 bg-purple-100 hover:bg-purple-200 rounded">Conclusion</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarbucksPresentation;
