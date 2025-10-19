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
            <p className="text-lg text-gray-600 mt-8">Porter-ի 5 ուժերի վերլուծություն և ռազմավարական պլանավորում</p>
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
              <li>• Porter-ի 5 ուժերի վերլուծություն</li>
              <li>• SWOT վերլուծություն</li>
              <li>• Գլոբալ ռազմավարություն</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <h3 className="font-bold text-xl mb-4 text-blue-800">Մաս II: Starbucks Armenia</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Հայաստանի սուրճի շուկա</li>
              <li>• Մրցակիցների վերլուծություն</li>
              <li>• Porter-ի 5 ուժեր ՀՀ-ում</li>
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
              <li><strong>Առաքելություն:</strong> "To inspire and nurture the human spirit". Մարդկանց սիրտն ու հոգին լուսավորել:</li>
              <li><strong>Բիզնես մոդել:</strong> 70% սեփական խանութներ, 25% Ֆրանշիզա(Franchise), 5% Մանրածախ առևտուր(Retail)</li>
            </ul>
          </div>
        </div>
      )
    },


// Slide 4: Porter's 5 Forces - Global
{
  title: "PORTER-Ի 5 ՈՒԺԵՐ: GLOBAL STARBUCKS",
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
            <li>✓ Բազմաթիվ մատակարարներ 30+ երկրներից</li>
            <li>✗ Գների տատանումներ հումքային շուկայում</li>
            <li>✓ Coffee and Farmer Equity ծրագիր՝ արդար առևտուր և էկոլոգիա</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-bold text-lg mb-2">2️⃣ Գնորդների ուժ</h4>
          <p className="text-sm mb-2">
            <strong>Գնահատական: 4/5 (Բարձր)</strong>
          </p>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>✓ 30M+ Rewards անդամներ (ԱՄՆ)</li>
            <li>✗ Գնային զգայունություն ապրանքների համար</li>
            <li>✓ Բարձր հավատարմություն բրենդին</li>
          </ul>
        </div>

        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
          <h4 className="font-bold text-lg mb-2">3️⃣ Առկա մրցակիցներ</h4>
          <p className="text-sm mb-2">
            <strong>Գնահատական: 4/5 (Բարձր)</strong>
          </p>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>✗ Costa, Dunkin Donuts, McCafe, Tim Hortons</li>
            <li>✗ Հագեցած շուկա</li>
            <li>✓ Բրենդային առավելություն</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h4 className="font-bold text-lg mb-2">4️⃣ Նոր մուտքեր</h4>
          <p className="text-sm mb-2">
            <strong>Գնահատական: 2/5 (Ցածր)</strong>
          </p>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>✓ Բարձր մուտքային ծախսեր</li>
            <li>✓ Ուժեղ բրենդային պատնեշներ</li>
            <li>✓ Էկոհամակարգի առավելություն</li>
          </ul>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500 col-span-2">
          <h4 className="font-bold text-lg mb-2">5️⃣ Փոխարինողներ</h4>
          <p className="text-sm mb-2">
            <strong>Գնահատական: 3/5 (Միջին)</strong>
          </p>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>✗ Թեյ, Energy drinks, RTD Coffee</li>
            <li>✗ Տնային սուրճի պատրաստում</li>
            <li>✓ Premium փորձառություն որպես տարբերակիչ</li>
          </ul>
        </div>
      </div>

      <p className="text-sm text-gray-700 mt-2">
        ☕ <strong>Starbucks Rewards</strong> ծրագիրը անվճար հավատարմության համակարգ է, 
        որը թույլ է տալիս յուրաքանչյուր գնումից հավաքել <em>Stars (աստղեր)</em> 
        և փոխանակել դրանք անվճար սուրճի, ուտեստների կամ այլ բոնուսների։
      </p>

      <div className="bg-gray-100 p-4 rounded-lg text-center">
        <p className="font-bold text-lg">
          📊 Ընդհանուր գնահատական: 3.2/5 - Բարձր մրցակցություն, բայց ուժեղ դիրքեր
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
              <li>✗ Տնտեսական անկայունություն և inflation</li>
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
          <p className="text-sm mb-2"><strong>Դիրք:</strong> #1 Տեղական լիդեր</p>
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
          <p className="text-sm mb-2"><strong>Դիրք:</strong> Value Leader</p>
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
          <p className="text-sm mb-2"><strong>Դիրք:</strong> Premium segment</p>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• 5+ պրեմիում տեղակայումներ</li>
            <li>• Նստելու հարմար տարածքներ</li>
            <li>• Եվրոպական ոճ</li>
            <li>• Գին: 1000-2500 դրամ</li>
            <li>• Նախատեսված բիզնես և աշխատանքային հանդիպումների համար</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-500">
          <h4 className="font-bold text-lg mb-2 text-amber-800">🎨 Specialty խաղացողներ</h4>
          <p className="text-sm mb-2"><strong>Դիրք:</strong> Niche/Quality</p>
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
                    <th className="p-3 text-center">Միջին գին</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="p-3 font-semibold">Coffee House</td>
                    <td className="p-3 text-center">600-800 ֏</td>
                    <td className="p-3 text-center">900-1200 ֏</td>
                    <td className="p-3 text-center">1000-1400 ֏</td>
                    <td className="p-3 text-center font-bold">950 ֏</td>
                  </tr>
                  <tr className="bg-gray-50 border-b">
                    <td className="p-3 font-semibold">CoffeeShop</td>
                    <td className="p-3 text-center">800-1000 ֏</td>
                    <td className="p-3 text-center">1200-1600 ֏</td>
                    <td className="p-3 text-center">1400-1800 ֏</td>
                    <td className="p-3 text-center font-bold">1350 ֏</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="p-3 font-semibold">Cofix</td>
                    <td className="p-3 text-center">600 ֏</td>
                    <td className="p-3 text-center">900 ֏</td>
                    <td className="p-3 text-center">1000 ֏</td>
                    <td className="p-3 text-center font-bold">833 ֏</td>
                  </tr>
                  <tr className="bg-gray-50 border-b">
                    <td className="p-3 font-semibold">Specialty (Lumen, Vol1)</td>
                    <td className="p-3 text-center">1000-1200 ֏</td>
                    <td className="p-3 text-center">1400-1800 ֏</td>
                    <td className="p-3 text-center">1600-2200 ֏</td>
                    <td className="p-3 text-center font-bold">1600 ֏</td>
                  </tr>
                  <tr className="bg-green-100 border-b-2 border-green-500">
                    <td className="p-3 font-bold text-green-800">Starbucks (կանխատեսվող)</td>
                    <td className="p-3 text-center font-bold">1200-1500 ֏</td>
                    <td className="p-3 text-center font-bold">1600-2000 ֏</td>
                    <td className="p-3 text-center font-bold">1800-2400 ֏</td>
                    <td className="p-3 text-center font-bold text-green-800">1800 ֏</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-blue-800">📊 Գնային դիրքավորում</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Cofix: Budget (600-1000 ֏)</li>
                <li>• Coffee House: Mid-range (800-1400 ֏)</li>
                <li>• CoffeeShop: Mid-Premium (1000-1800 ֏)</li>
                <li>• Specialty: Premium (1200-2200 ֏)</li>
                <li>• Starbucks: Premium+ (1200-2400 ֏)</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-amber-800">💡 Գնային ռազմավարություն</h4>
              <p className="text-sm text-gray-700">
                Starbucks-ը պետք է դիրքավորվի որպես premium բրենդ, բայց ոչ ամենաթանկը։ 
                Կանխատեսվող գները լինելու են 20-30% բարձր Coffee House-ից, 
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
                <li>✓ Ներմուծված հումք՝ բազմաթիվ աղբյուրներից</li>
                <li>✓ Starbucks-ի գլոբալ մատակարարման շղթա</li>
                <li>✗ Ներմուծման հարկեր և լոգիստիկ</li>
                <li>✓ Ուժեղ բանակցային դիրք որպես գլոբալ բրենդ</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-lg mb-2">2️⃣ Գնորդների ուժ</h4>
              <p className="text-sm mb-2"><strong>Գնահատական: 5/5 (Շատ բարձր)</strong></p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✗ Բարձր գնային զգայունություն</li>
                <li>✗ Բազմաթիվ տեղական այլընտրանքներ</li>
                <li>✗ Միջին եկամուտը ցածր է ԱՄՆ-ից</li>
                <li>✓ Բրենդի ընկալման արժեք</li>
                <li>✗ Փոխարկման ցածր ծախսեր</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-lg mb-2">3️⃣ Առկա մրցակիցներ</h4>
              <p className="text-sm mb-2"><strong>Գնահատական: 5/5 (Շատ բարձր)</strong></p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✗ Coffee House: 40+ մասնաճյուղ, տեղական լիդեր</li>
                <li>✗ Բազմաթիվ փոքր սրճարաններ</li>
                <li>✗ Cofix: ագրեսիվ ընդլայնում</li>
                <li>✗ Ավանդական սուրճի մշակույթ</li>
                <li>✓ Առաջին միջազգային premium բրենդը</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-lg mb-2">4️⃣ Նոր մուտքեր</h4>
              <p className="text-sm mb-2"><strong>Գնահատական: 3/5 (Միջին)</strong></p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✓ Starbucks-ը բացելու է ճանապարհը</li>
                <li>✗ Costa, Dunkin կարող են հետևել</li>
                <li>✓ Մասնակի մուտքային պատնեշներ</li>
                <li>✗ Ներտեղական բրենդերի հեշտ ստեղծում</li>
                <li>✗ Փոքր շուկա՝ սահմանափակ ներուժ</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500 col-span-2">
              <h4 className="font-bold text-lg mb-2">5️⃣ Փոխարինողներ</h4>
              <p className="text-sm mb-2"><strong>Գնահատական: 4/5 (Բարձր)</strong></p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✗ Ավանդական հայկական սուրճ (ջեզվե)</li>
                <li>✗ Թեյի ուժեղ մշակույթ</li>
                <li>✗ Տնային սուրճի պատրաստում</li>
                <li>✗ Energy drinks աճող սեգմենտ</li>
                <li>✓ Premium փորձառությունը դժվար փոխարինել</li>
              </ul>
            </div>
          </div>
          <div className="bg-red-100 p-4 rounded-lg text-center border-2 border-red-400">
            <p className="font-bold text-lg text-red-800">📊 Ընդհանուր գնահատական: 3.8/5 - Շատ բարձր մրցակցություն և մարտահրավերներ</p>
            <p className="text-sm text-gray-700 mt-2">Հայաստանի շուկան ավելի մրցակցային է, քան գլոբալ միջին մակարդակը</p>
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
              <li>✓ Գլոբալ supply chain և expertise</li>
              <li>✓ Թվային էկոհամակարգ (Rewards app)</li>
              <li>✓ Մեծ մարքեթինգային բյուջե</li>
              <li>✓ Կորպորատիվ կուլտուրա և սպասարկման ստանդարտներ</li>
            </ul>
          </div>
          <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
            <h3 className="font-bold text-xl mb-3 text-red-800">⚠️ Weaknesses (Թույլ կողմեր)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✗ Բարձր գներ՝ փոքր և գնազգայուն շուկայի համար</li>
              <li>✗ Անծանոթություն տեղական սպառողական վարքագծի հետ</li>
              <li>✗ Բարձր օպերացիոն ծախսեր</li>
              <li>✗ Չկա տեղական ներկայություն և փորձ</li>
              <li>✗ Ավանդական հայկական սուրճից տարբեր արտադրանք</li>
              <li>✗ Լեզվի և մշակութային բազա անհրաժեշտ է</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-300">
            <h3 className="font-bold text-xl mb-3 text-blue-800">🚀 Opportunities (Հնարավորություններ)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Առաջին միջազգային premium սուրճի ցանցը</li>
              <li>✓ Երիտասարդ և արևմտամետ սպառողներ</li>
              <li>✓ Աճող միջին դաս և գնողունակություն</li>
              <li>✓ Զբոսաշրջություն (հայ Սփյուռք, օտարներ)</li>
              <li>✓ Coworking մշակույթի զարգացում</li>
              <li>✓ Social media ազդեցություն և Instagram-ability</li>
              <li>✓ Partnerships with local businesses</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-5 rounded-lg border-2 border-yellow-300">
            <h3 className="font-bold text-xl mb-3 text-yellow-800">⛔ Threats (Սպառնալիքներ)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✗ Coffee House-ի ուժեղ դիրքերը և տեղական լոյալություն</li>
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
                <li><strong>🏢 Franchise մոդել:</strong> Տեղական գործընկերների հետ</li>
                <li><strong>📍 Տեղակայում:</strong> Northern Avenue, Cascade, Mall-եր</li>
                <li><strong>🎯 Թիրախ:</strong> 18-40 տարեկան urban professionals</li>
                <li><strong>🌟 Positioning:</strong> "International premium lifestyle brand"</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-2 border-blue-400">
              <h4 className="font-bold text-lg mb-3 text-blue-800 flex items-center">
                <DollarSign className="w-6 h-6 mr-2" /> 2. Գնային ռազմավարություն
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>💵 Entry pricing:</strong> 10-15% զեղչ առաջին 3 ամիս</li>
                <li><strong>🎁 Loyalty:</strong> Starbucks Rewards Armenia launch</li>
                <li><strong>📱 Digital first:</strong> App-based ordering և cashback</li>
                <li><strong>🎓 Student discounts:</strong> 15-20% երեկոյան ժամերին</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border-2 border-purple-400">
              <h4 className="font-bold text-lg mb-3 text-purple-800 flex items-center">
                <Coffee className="w-6 h-6 mr-2" /> 3. Տեղայնացված մենյու
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>☕ Armenian Coffee:</strong> Ջեզվե սուրճ տարբերակ</li>
                <li><strong>🍰 Local treats:</strong> Գաթա, պախլավա integration</li>
                <li><strong>🌿 Armenian herbs:</strong> Թարխուն, նանա flavors</li>
                <li><strong>🍂 Seasonal:</strong> Դուդուկի համ աշնանը</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-lg border-2 border-amber-400">
              <h4 className="font-bold text-lg mb-3 text-amber-800 flex items-center">
                <Users className="w-6 h-6 mr-2" /> 4. Մարքեթինգ և համայնք
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>📸 Instagram strategy:</strong> Influencer partnerships</li>
                <li><strong>🎨 Local artists:</strong> Խանութների արվեստի ցուցադրում</li>
                <li><strong>🤝 CSR:</strong> Հայկական սուրճի ֆերմերներին աջակցություն</li>
                <li><strong>🎪 Events:</strong> Ամսական community events</li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-5 rounded-lg text-white">
            <h4 className="font-bold text-xl mb-3 text-center">🎯 Առաջին 12 ամիսների նպատակներ</h4>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold">3-5</p>
                <p className="text-sm">Խանութներ</p>
              </div>
              <div>
                <p className="text-3xl font-bold">15,000+</p>
                <p className="text-sm">Rewards անդամներ</p>
              </div>
              <div>
                <p className="text-3xl font-bold">40%</p>
                <p className="text-sm">App պատվերներ</p>
              </div>
              <div>
                <p className="text-3xl font-bold">25%</p>
                <p className="text-sm">Շուկայի բաժին premium-ում</p>
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
                <li>• Տեղական գործընկերի ընտրություն և franchise համաձայնագիր</li>
                <li>• Շուկայի խորը հետազոտություն և ֆոկուս խմբեր</li>
                <li>• Իրավական և կարգավորող հարցերի լուծում</li>
                <li>• Մատակարարման շղթայի ստեղծում (ներմուծում, պահեստ)</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-lg mb-2">📅 Փուլ 2: Soft Launch (3-4 ամիս)</h4>
              <ul className="text-sm space-y-1 text-gray-700 ml-4">
                <li>• Առաջին flagship store բացում (Northern Avenue)</li>
                <li>• Փորձարկման շրջան՝ VIP հրավիրյալների համար</li>
                <li>• Rewards app Armenia տարբերակի թողարկում</li>
                <li>• Social media campaign և PR events</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-lg mb-2">📅 Փուլ 3: Grand Opening (5-6 ամիս)</h4>
              <ul className="text-sm space-y-1 text-gray-700 ml-4">
                <li>• Պաշտոնական բացում՝ մեդիա ծածկույթով</li>
                <li>• Opening week promotions: 20% off, free tastings</li>
                <li>• Influencer partnerships և Instagram takeovers</li>
                <li>• Community event: Հայկական սուրճի փառատոն</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
              <h4 className="font-bold text-lg mb-2">📅 Փուլ 4: Ընդլայնում (7-12 ամիս)</h4>
              <ul className="text-sm space-y-1 text-gray-700 ml-4">
                <li>• 2-3 լրացուցիչ տեղամասեր (Cascade, Dalma Garden Mall)</li>
                <li>• Loyalty program optimization հիման վրա data analytics</li>
                <li>• Seasonal menu launches և local collaborations</li>
                <li>• B2B partnerships (corporate accounts, universities)</li>
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
                <p>Flexible pricing, promotions, value communication</p>
              </div>
              <div>
                <p className="font-semibold">Ռիսկ:</p>
                <p>Տեղական մրցակիցների հակազդեցություն</p>
              </div>
              <div>
                <p className="font-semibold">Մեղմացում:</p>
                <p>Differentiation through experience, not just product</p>
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
              <p className="text-xs text-gray-500 mt-2">Մեկ խանութի համար</p>
            </div>
            <div className="bg-green-100 p-5 rounded-lg text-center border-2 border-green-400">
              <TrendingUp className="w-12 h-12 mx-auto mb-2 text-green-700" />
              <p className="text-3xl font-bold text-green-800">$1.2M</p>
              <p className="text-sm text-gray-600">Տարեկան եկամուտ նպատակ</p>
              <p className="text-xs text-gray-500 mt-2">3 խանութի համար</p>
            </div>
            <div className="bg-purple-100 p-5 rounded-lg text-center border-2 border-purple-400">
              <BarChart3 className="w-12 h-12 mx-auto mb-2 text-purple-700" />
              <p className="text-3xl font-bold text-purple-800">18-24</p>
              <p className="text-sm text-gray-600">Ամիսներ ROI-ի համար</p>
              <p className="text-xs text-gray-500 mt-2">Մեկ խանութ</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md">
            <h4 className="font-bold text-xl mb-4 text-gray-800">💰 Եկամուտների կանխատեսում (մեկ խանութ/ամիս)</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-gray-700 mb-2">Ելքային ենթադրություններ:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Օրական հաճախորդներ: 350-400</li>
                  <li>• Միջին վաճառք: 2,200 ֏ (~$5.5)</li>
                  <li>• Աշխատանքային օրեր: 30/ամիս</li>
                  <li>• Բեռնվածություն: 70-85%</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-700 mb-2">Ամսական ֆինանսներ:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Եկամուտ: ~25M ֏ ($62K)</li>
                  <li>• COGS: 30% (~7.5M ֏)</li>
                  <li>• Օպերացիոն: 40% (~10M ֏)</li>
                  <li>• Զուտ շահույթ: 20-25% (~5-6M ֏)</li>
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
                <p className="text-xs mt-1">40-60% բեռնվածություն</p>
              </div>
              <div>
                <p className="font-bold text-2xl text-amber-700">Q2-Q3</p>
                <p className="text-gray-600">Ամիս 4-9</p>
                <p className="text-xs mt-1">70-80% բեռնվածություն</p>
              </div>
              <div>
                <p className="font-bold text-2xl text-amber-700">Q4</p>
                <p className="text-gray-600">Ամիս 10-12</p>
                <p className="text-xs mt-1">85%+ բեռնվածություն</p>
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
                  <td className="p-2 text-center border">🟢🟢🟢🟢⚪</td>
                  <td className="p-2 text-center border">🟢🟢🟢🟢🟢</td>
                  <td className="p-2 text-center border">🟢🟢🟢⚪⚪</td>
                  <td className="p-2 text-center border bg-green-50">🟢🟢⚪⚪⚪</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-2 font-semibold border">Արտադրանքի որակ</td>
                  <td className="p-2 text-center border">🟢🟢🟢⚪⚪</td>
                  <td className="p-2 text-center border">🟢🟢⚪⚪⚪</td>
                  <td className="p-2 text-center border">🟢🟢🟢🟢⚪</td>
                  <td className="p-2 text-center border bg-green-50">🟢🟢🟢🟢🟢</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 font-semibold border">Տեղակայումներ</td>
                  <td className="p-2 text-center border">🟢🟢🟢🟢🟢</td>
                  <td className="p-2 text-center border">🟢⚪⚪⚪⚪</td>
                  <td className="p-2 text-center border">🟢🟢⚪⚪⚪</td>
                  <td className="p-2 text-center border bg-green-50">🟢⚪⚪⚪⚪</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-2 font-semibold border">Ատմոսֆերա/Փորձառություն</td>
                  <td className="p-2 text-center border">🟢🟢🟢⚪⚪</td>
                  <td className="p-2 text-center border">🟢🟢⚪⚪⚪</td>
                  <td className="p-2 text-center border">🟢🟢🟢🟢⚪</td>
                  <td className="p-2 text-center border bg-green-50">🟢🟢🟢🟢🟢</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 font-semibold border">Թվային էկոհամակարգ</td>
                  <td className="p-2 text-center border">🟢🟢⚪⚪⚪</td>
                  <td className="p-2 text-center border">🟢⚪⚪⚪⚪</td>
                  <td className="p-2 text-center border">🟢⚪⚪⚪⚪</td>
                  <td className="p-2 text-center border bg-green-50">🟢🟢🟢🟢🟢</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-2 font-semibold border">Loyalty ծրագիր</td>
                  <td className="p-2 text-center border">🟢🟢🟢⚪⚪</td>
                  <td className="p-2 text-center border">⚪⚪⚪⚪⚪</td>
                  <td className="p-2 text-center border">🟢⚪⚪⚪⚪</td>
                  <td className="p-2 text-center border bg-green-50">🟢🟢🟢🟢🟢</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 font-semibold border">Տեղական ինտեգրում</td>
                  <td className="p-2 text-center border">🟢🟢🟢🟢🟢</td>
                  <td className="p-2 text-center border">🟢🟢⚪⚪⚪</td>
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
                <li>• Premium փորձառություն և ատմոսֆերա</li>
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
                <strong>Խնդիր:</strong> Ոչ այնքան թանկ, որ անմատչելի լինի, բայց բավական premium, որ բրենդը պահպանի արժեքը։
              </p>
              <p className="text-sm text-gray-700">
                <strong>Լուծում:</strong> "Affordable luxury" - հասանելի ճոխություն, ոչ ամենօրյա, այլ հատուկ moments-ի համար։
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-green-200 p-5 rounded-lg shadow-md">
              <h4 className="font-bold text-xl mb-3 text-green-800 flex items-center">
                <Coffee className="w-6 h-6 mr-2" />
                2. Տեղայնացում
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Խնդիր:</strong> Հայաստանը ունի իր սուրճի մշակույթ և սովորություններ։
              </p>
              <p className="text-sm text-gray-700">
                <strong>Լուծում:</strong> Հայկական flavors, ավանդական սուրճ մենյուում, տեղական pastries, հայերեն personalization։
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-5 rounded-lg shadow-md">
              <h4 className="font-bold text-xl mb-3 text-purple-800 flex items-center">
                <Users className="w-6 h-6 mr-2" />
                3. Համայնքի ստեղծում
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Խնդիր:</strong> Coffee House-ն արդեն ստեղծել է community feeling։
              </p>
              <p className="text-sm text-gray-700">
                <strong>Լուծում:</strong> Events, art exhibitions, coworking spaces, social responsibility projects, Instagram-worthy moments։
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-5 rounded-lg shadow-md">
              <h4 className="font-bold text-xl mb-3 text-amber-800 flex items-center">
                <ShoppingBag className="w-6 h-6 mr-2" />
                4. Omnichannel փորձառություն
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Խնդիր:</strong> Երիտասարդները ակնկալում են seamless digital experience։
              </p>
              <p className="text-sm text-gray-700">
                <strong>Լուծում:</strong> Rewards app Armenia, mobile ordering, delivery partnerships (Yandex, Glovo), cashless payments։
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 rounded-lg text-white">
            <h4 className="font-bold text-2xl mb-4 text-center">🎯 The Winning Formula</h4>
            <p className="text-center text-lg mb-3">
              Global Brand + Local Heart + Digital Excellence + Community Focus = Success in Armenia
            </p>
            <div className="grid grid-cols-4 gap-3 text-center text-sm mt-4">
              <div className="bg-white bg-opacity-20 p-3 rounded">
                <p className="font-bold">International</p>
                <p className="text-xs">Credibility</p>
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded">
                <p className="font-bold">Armenian</p>
                <p className="text-xs">Flavors</p>
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded">
                <p className="font-bold">Digital</p>
                <p className="text-xs">First</p>
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded">
                <p className="font-bold">Community</p>
                <p className="text-xs">Driven</p>
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
              <p className="text-sm text-gray-600 mb-2">Հայկական սպառողները կարող են գտնել գները չափազանց բարձր սկզբնական փուլում։</p>
              <div className="bg-green-100 p-2 rounded mt-2">
                <p className="text-xs font-semibold text-green-800">Մեղմացում:</p>
                <ul className="text-xs text-gray-700 ml-3 mt-1">
                  <li>• Happy hours with 20-30% discounts</li>
                  <li>• Student և corporate discounts</li>
                  <li>• Value communication: quality, experience, sustainability</li>
                  <li>• Smaller sizes option (Short size)</li>
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
                  <li>• Differentiation through international brand և digital</li>
                  <li>• Չմրցել գներով, մրցել փորձառությամբ</li>
                  <li>• Partnership opportunities instead of war</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-800 mb-2">🚨 Ռիսկ 3: Տնտեսական անկայունություն</h4>
              <p className="text-sm text-gray-700 mb-2"><strong>Հավանականություն:</strong> Միջին (50%)</p>
              <p className="text-sm text-gray-600 mb-2">Դրամի արժեզրկում, inflation, եկամուտների կրճատում կարող են սահմանափակել պահանջարկը։</p>
              <div className="bg-green-100 p-2 rounded mt-2">
                <p className="text-xs font-semibold text-green-800">Մեղմացում:</p>
                <ul className="text-xs text-gray-700 ml-3 mt-1">
                  <li>• Flexible pricing model</li>
                  <li>• Multi-currency pricing (AMD/USD)</li>
                  <li>• Focus on value և not luxury positioning</li>
                  <li>• Loyalty rewards to retain customers</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-800 mb-2">🚨 Ռիսկ 4: Մշակութային անհամապատասխանություն</h4>
              <p className="text-sm text-gray-700 mb-2"><strong>Հավանականություն:</strong> Միջին (40%)</p>
              <p className="text-sm text-gray-600 mb-2">Ամերիկյան սուրճի մշակույթը կարող է չհամընկնել հայկական ավանդույթների հետ։</p>
              <div className="bg-green-100 p-2 rounded mt-2">
                <p className="text-xs font-semibold text-green-800">Մեղմացում:</p>
                <ul className="text-xs text-gray-700 ml-3 mt-1">
                  <li>• Հայկական սուրճ մենյուում (Ջեզվե)</li>
                  <li>• Տեղական ingredients և flavors</li>
                  <li>• Հայերեն service և personalization</li>
                  <li>• Respect for local coffee culture</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <h4 className="font-bold text-xl mb-2 text-center">⚖️ Ընդհանուր ռիսկի գնահատում</h4>
            <p className="text-center text-sm">
              Բարձր ռիսկ, բայց կառավարելի համապատասխան ռազմավարության դեպքում։ 
              Success rate: <span className="text-green-400 font-bold">65-70%</span> first 2 years-ում։
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
                  <span>Ճիշտ գործընկեր ընտրենք և franchise model կիրառենք</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Լուրջ ներդրում անենք տեղայնացման մեջ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Digital-first ռազմավարություն իրականացնենք</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Ձևավորենք community և social value</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Համբերատար լինենք և երկարաժամկետ մտածենք</span>
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
                  <span>Ակնկալենք արագ ROI (12 ամիսից պակաս)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span>
                  <span>Չբավարարվենք ստանդարտ գլոբալ մոդելով</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span>
                  <span>Անտեսենք գնային զգայունությունը</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span>
                  <span>Մրցենք ուղղակիորեն Coffee House-ի հետ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span>
                  <span>Չստեղծենք իրական տարբերակիչ արժեք</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 p-8 rounded-lg text-white text-center">
            <h3 className="text-3xl font-bold mb-4">📢 ՄԵՐ ՎԵՐՋՆԱԿԱՆ ԱՌԱՋԱՐԿԸ</h3>
            <p className="text-xl mb-4">
              Starbucks-ը <span className="font-bold underline">ՊԵՏՔ Է</span> մտնի Հայաստանի շուկա, 
              բայց <span className="font-bold underline">ՈՉԹԵ</span> որպես ևս մեկ սուրճի խանութ։
            </p>
            <p className="text-lg mb-6">
              Այն պետք է դիրքավորվի որպես <strong>lifestyle destination</strong>, 
              որը համադրում է գլոբալ ստանդարտները հայկական հոգևորության հետ։
            </p>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <p className="text-2xl font-bold">3-5</p>
                <p className="text-sm">Խանութներ 1-ին տարում</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <p className="text-2xl font-bold">$3-4M</p>
                <p className="text-sm">Ներդրում 3 տարում</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <p className="text-2xl font-bold">25%+</p>
                <p className="text-sm">Premium շուկայի բաժին</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-400 text-center">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              💡 Հիմնական message
            </p>
            <p className="text-gray-700">
              Հաջողությունը կախված է ոչ թե ապրանքից, այլ <strong>փորձառությունից, 
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
                <p className="text-sm">Ընկերության նկարագիր</p>
              </div>
              <div>
                <p className="font-semibold">Ռաիսա</p>
                <p className="text-sm">Ապրանքներ և շուկա</p>
              </div>
              <div>
                <p className="font-semibold">Անի</p>
                <p className="text-sm">Մատակարարման շղթա</p>
              </div>
              <div>
                <p className="font-semibold">Սրբուհի</p>
                <p className="text-sm">Գնորդներ</p>
              </div>
              <div>
                <p className="font-semibold">Հասմիկ</p>
                <p className="text-sm">Porter's 5 Forces</p>
              </div>
              <div>
                <p className="font-semibold">Հրանտ</p>
                <p className="text-sm">Եզրակացություն</p>
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
