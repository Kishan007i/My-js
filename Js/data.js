  //language end      
       
// Service Categories Data with Subcategories
const serviceCategories = [
  {
    id: "document-services",
    title: "દસ્તાવેજી સેવાઓ",
    icon: "svg/icons/adhar.png",
    description: "EPFO, પાન કાર્ડ, આધાર સહિત તમામ દસ્તાવેજ સંબંધિત સેવાઓ.",
    subcategories: [
      {
        id: "personal-docs",
        name: "વ્યક્તિગત દસ્તાવેજો",
        icon: "https://cdn-icons-png.freepik.com/256/2016/2016366.png?ga=GA1.1.663578574.1750866847&semt=ais_hybrid"
      },
      {
        id: "government-docs",
        name: "સરકારી દસ્તાવેજો",
        icon: "svg/icons/epfo.png"
      },
         {
      id: "land-records",
      name: "જામીન ના દસ્તાવેજો",
      icon: "svg/icons/land.png"
    }
    ],
    services: [
      {
        id: "epfo-service",
        title: "EPFO વિથડ્રોઅલ",
        titleHtml: `માત્ર <span class="highlight">₹299  </span> માં PF વિથડ્રોઅલ  
        `,
        voiceHtml: `<button class="voice-button" data-voice="voice/EPFO.mp3">
                <svg viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
            </button>
            `,
           shortDescription: "ઝડપી અને સરળ PF વિથડ્રોઅલ સેવા",
        longDescription: `
         
        PF વિથડ્રોઅલ માટે નિષ્ણાત સહાયતા મેળવો — દસ્તાવેજો થી લઇ અંતિમ મંજૂરી સુધીની તમામ પ્રક્રિયા અમે સરળ અને સુરક્ષિત બનાવિયે છે. તમારું કામ, હવે અમારી જાવાબદારી.
        <div class="service-list"> 
          <ul> 
            <li><strong>• પાસવર્ડ બદલાવવું:</strong> મફત</li> 
            <li><strong>• PF વિથડ્રોઅલ:</strong> ₹299</li>
            <li><strong>• એક્ઝિટ તારીખ સુધારણા:</strong> ₹149</li> 
            <li><strong>• PF ટ્રાન્સફર અને અન્ય:</strong> ₹299</li> 
            <li><strong>• જરૂરી દસ્તાવેજો:</strong><br>
        - UAN નંબર<br>
        - પાસવર્ડ (હોય તો)<br>
        - આધાર કાર્ડ<br>
        - રજિસ્ટર્ડ મોબાઇલ નંબર<br>
        - બેંક પાસબુક અથવા ચેકબુક (ફોટો)<br>
        - પાન કાર્ડ<br>
        
           
          </ul> 
        </div>
        <p class="offer"><strong>• વિશેષ ઓફર:</strong> અમારી <span class="highlight">નવી સ્પેશિયલ કોમ્બો ઓફર</span> મેળવો અને તમામ સેવાઓ મેળવો માત્ર <span class="highlight">₹299માં!</span></p>`,
        price: 299,
        images: [
                 'img/epfo1.jpg',
                 'img/epfo3.jpg',
                 'img/epfo2.jpg'
        
        ],
        visitLink: 'https://wa.me/919157437847?text=હું%20EPFO%20સેવા%20વિશે%20માહિતી%20ચાહું છું',
        category: "document-services",
        subcategory: "government-docs",
        keywords: ["epfo", "pf", "withdrawal", "provident fund", "employee"]
      },
      {
        id: "pan-card-service",
        title: "પાન કાર્ડ",
        titleHtml: `માત્ર<span class="highlight"> ₹199</span> માં<br> પાન કાર્ડ મેળવો             `,
               voiceHtml: `<button class="voice-button" data-voice="voice/pancard.mp3">
                <svg viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
            </button>
            `,
                  
            
        shortDescription: "24 કલાકમાં તમારું પાન કાર્ડ ની PDF મેળવો",
        longDescription: ` – તમારા પાન કાર્ડ માટે નિષ્ણાત સહાયતા મેળવોહવે પ્રક્રિયા વધુ સરળ અને સુરક્ષિત બનાવડાવો. અમે તમારી તરફથી તમામ દસ્તાવેજી કામગીરી સંભાળીએ છીએ હવે PAN માટે અરજી કરવી એ સરળ અને વિશ્વસનીય અનુભવ છે.

        <div class="service-list"> 
           <br>
          <ul> 
            <li><strong>• પાન કાર્ડ સેવા:</strong> ₹199</li> 
            <li><strong>• માત્ર 24 કલાકમાં પાન કાર્ડ ની PDF મેળવો</strong></li> 
            <li><strong>• જરૂરી દસ્તાવેજ:</strong> <br> - આધાર કાર્ડ
           <br>  - રજિસ્ટર્ડ મોબાઇલ નંબર</li> 
          </ul> 
        </div>`,
        price: 199,
        images: [
          'img/pancard1.jpg',
          'img/pancard2.jpg'
        ],
        visitLink: 'https://wa.me/919157437847?text=હું%20પાન%20કાર્ડ%20માટે%20અરજી%20કરવા%20માગું છું',
        category: "document-services",
        subcategory: "government-docs",
        keywords: ["pan", "card", "tax", "income", "government"]
      },
      
      {
  id: "pvc-aadhar-service",
  title: "PVC આધાર કાર્ડ બુક કરો",
  titleHtml: `માત્ર <span class="highlight">₹149</span> માં PVC આધાર કાર્ડ બુક કરો  `,
   voiceHtml: `<button class="voice-button" data-voice="voice/adharcard.mp3">
                <svg viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
            </button>
            `,
            
  shortDescription: "આધાર કાર્ડ હવે પોકેટમાં — ઓર્ડર કરો PVC આધાર કાર્ડ માત્ર ₹149 માં",
  longDescription: `
    તમારા આધાર કાર્ડને હવે પોકેટ સાઇઝના PVC કાર્ડમાં બદલાવવાનું શ્રેષ્ઠ તક. અમારી સેવા દ્વારા સરળ અને સુરક્ષિત બુકિંગનો લાભ લો.
    <div class="service-list"> 
      <ul> 
        <li><strong>• PVC આધાર કાર્ડ બુકિંગ:</strong> ₹149</li> 
        <li><strong>• જરૂરી દસ્તાવેજો:</strong>
        <br>
        <br>
        - આધાર નંબર<br>
        - રજિસ્ટર્ડ મોબાઇલ નંબર<br>
      </ul> 
    </div>`,
  price: 149,
  images: [
    'img/aadhar.jpg'
     ],
  visitLink: 'https://wa.me/919157437847?text=હું%20PVC%20આધાર%20કાર્ડ%20સેવા%20બાબતે%20માહિતી%20ચાહું%20છું',
  category: "document-services",
  subcategory: "government-docs",
  keywords: ["pvc aadhar", "aadhar card", "uidai", "government card", "aadhar booking"]
},
/* temporary close */
/* {
  id: "birth-certificate-service",
  title: "બર્થ સર્ટિફિકેટ સેવા",
  titleHtml: `માત્ર <span class="highlight">₹299</span> માં બર્થ સર્ટિફિકેટ બનાવડાવો`,
   voiceHtml: `<button class="voice-button" data-voice="voice/birth.mp3">
                <svg viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
            </button>
            `,

  shortDescription: "ઝડપી અને સરળ જન્મ સર્ટિફિકેટ મેળવવાની સેવા",
  longDescription: `
    હવે બર્થ સર્ટિફિકેટ મેળવવો હોય તો ચિંતા કરવાની જરૂર નથી. અમારી સેવા દ્વારા આપને ઝડપી અને સરળ રીતે બધું મળી શકે છે — ડોક્યુમેન્ટ્સ વેરિફિકેશનથી લઈને ફાઇનલ સર્ટિફિકેટ સુધી.
    <div class="service-list"> 
      <ul> 
        <li><strong>• જન્મ સર્ટિફિકેટ સેવા:</strong> ₹199</li> 
        <li><strong>• જરૂરી દસ્તાવેજો:</strong><br>
        - બાળકનું નામ<br>
        - માતા-પિતાનું નામ<br>
        - જન્મ તારીખ<br>
        - જન્મ સ્થળ<br>
        - હોસ્પિટલ સર્ટિફિકેટ (જો હોય)<br>
        - પિતાનો/માતાનો આધાર કાર્ડ<br>
        - એડ્રેસ પ્રૂફ<br>
      </ul> 
    </div>
    <p class="offer"><strong>• નોંધ:</strong> ગામ કે શહેર અનુસાર વિધિવત પ્રક્રિયા અલગ હોઈ શકે છે</p>`,
  price: 299,
  images: [
    'img/birth1.jpg',
    'img/birth2.jpg',
    'img/birth3.jpg'
  ],
  visitLink: 'https://wa.me/919157437847?text=હું%20બર્થ%20સર્ટિફિકેટ%20સેવા%20વિશે%20માહિતી%20ચાહું%20છું',
  category: "document-services",
  subcategory: "government-docs",
  keywords: ["birth certificate", "janm patrak", "government docs", "certificate"]
},
 */{
  id: "caste-certificate-service",
  title: "SC/ST જાતિ પ્રમાણપત્ર સેવા",
  titleHtml: `માત્ર <span class="highlight">₹299</span> માં SC/ST જાતિ પ્રમાણપત્ર મેળવો`,
   voiceHtml: `<button class="voice-button" data-voice="voice/cast.mp3">
                <svg viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
            </button>
            `,

  shortDescription: "સરળ પ્રક્રિયા સાથે ઝડપથી મેળવો તમારું જાતિ પ્રમાણપત્ર",
  longDescription: `
    SC/ST જાતિ પ્રમાણપત્ર ઘણી સરકારી યોજના અને લાભ માટે મહત્વપૂર્ણ છે. અમારી સેવા દ્વારા તમે સરળતાથી વિધિવત પ્રમાણપત્ર મેળવવામાં મદદ મેળવી શકો છો.
    <div class="service-list"> 
      <ul> 
        <li><strong>• SC/ST જાતિ પ્રમાણપત્ર સેવા:</strong> ₹249</li> 
        <li><strong>• જરૂરી દસ્તાવેજો:</strong><br>
        - અરજીકર્તાનો આધાર કાર્ડ<br>
        - પિતાનું જાતિ પ્રમાણપત્ર (જો હોય)<br>
        - સ્કૂલ લીવિંગ સર્ટિફિકેટ<br>
        - રેશન કાર્ડ અથવા મતદાર ઓળખપત્ર<br>
        - સરનામું પુરાવા<br>
        - ફોટો (પાસપોર્ટ  સાઇઝ)<br>
      </ul> 
    </div>
    <p class="offer"><strong>• નોંધ:</strong> તમારું પ્રમાણપત્ર જિલ્લા મુજબ ઓનલાઈન કે મેન્યુઅલ પ્રક્રિયા પર આધારિત હોઈ શકે છે.</p>`,
  price: 299,
  images: [
    'img/caste1.jpg'
  ],
  visitLink: 'https://wa.me/919157437847?text=હું%20SC/ST%20જાતિ%20પ્રમાણપત્ર%20સેવા%20વિશે%20માહિતી%20ચાહું%20છું',
  category: "document-services",
  subcategory: "government-docs",
  keywords: ["caste certificate", "sc caste", "st caste", "pramanpatra", "government certificate"]
},
{
  id: "income-certificate-service",
  title: "આવક પ્રમાણપત્ર સેવા",
  titleHtml: `માત્ર <span class="highlight">₹299</span> માં આવક પ્રમાણપત્ર મેળવો`,
   voiceHtml: `<button class="voice-button" data-voice="voice/income.mp3">
                <svg viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
            </button>
            `,

  shortDescription: "સરકારી યોજનાઓ માટે આવક પ્રમાણપત્ર ઝડપથી અને સરળ રીતે મેળવો",
  longDescription: `
    આવક પ્રમાણપત્ર વિવિધ સરકારી લાભ, શિષ્યવૃતિ અને લોકરંજક યોજનાઓ માટે જરૂરી હોય છે. અમારી સેવા તમને ઝડપી અને વિશ્વસનીય રીતે આવક પ્રમાણપત્ર મેળવવામાં મદદ કરે છે.
    <div class="service-list"> 
      <ul> 
        <li><strong>• આવક પ્રમાણપત્ર સેવા:</strong> ₹199</li> 
        <li><strong>• જરૂરી દસ્તાવેજો:</strong><br>
        - અરજીકર્તાનો આધાર કાર્ડ<br>
        - સરનામું પુરાવા (રેશન કાર્ડ / લાઇટ બિલ)<br>
        - આવકનો પુરાવો (પગાર પત્ર / નોકરીનું સર્ટિફિકેટ / શપથપત્ર)<br>
        - પાન કાર્ડ (જો હોય)<br>
        - બેંક પાસબુક કોપી (પસંદગી પ્રમાણે)<br>
        - પાસપોર્ટ સાઇઝ ફોટો<br>
      </ul> 
    </div>
    <p class="offer"><strong>• નોંધ:</strong> આવક પ્રમાણપત્રનો ઉપયોગ શિષ્યવૃતિ, રિઝર્વેશન અને અન્ય સરકારી યોજનામાં થાય છે.</p>`,
  price: 299,
  images: [
       'img/income1.jpg'
  ],
  visitLink: 'https://wa.me/919157437847?text=હું%20આવક%20પ્રમાણપત્ર%20સેવા%20વિશે%20માહિતી%20ચાહું%20છું',
  category: "document-services",
  subcategory: "government-docs",
  keywords: ["income certificate", "aavak pramanpatra", "government docs", "certificate service"]
},
{
  id: "ration-card-service",
  title: "રેશન કાર્ડ સેવાઓ",
  titleHtml: `માત્ર <span class="highlight">₹299</span> માં રેશન કાર્ડ સંબંધિત તમામ સેવા હવે એક જ જગ્યાએ`,
   voiceHtml: `<button class="voice-button" data-voice="voice/ration.mp3">
                <svg viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
            </button>
            `,

  shortDescription: "નવું રેશન કાર્ડ, સભ્ય ઉમેરવા/કાઢવા અને KYC અપડેટ જેવી તમામ સેવાઓ ઉપલબ્ધ",
  longDescription: `
    હવે રેશન કાર્ડ સંબંધિત દરેક કાર્ય માટે દફતરની લાઇનમાં ઉભા રહેવાની જરૂર નથી. અમારા દ્વારા તમને મળશે સરળ, ઝડપી અને વિશ્વસનીય સેવા:
    <div class="service-list"> 
      <ul> 
        <li><strong>• નવું રેશન કાર્ડ બનાવવું:</strong> ₹249</li> 
        <li><strong>• નામ ઉમેરવું / નવા સભ્ય ઉમેરવા:</strong> ₹149</li>
        <li><strong>• નામ દૂર કરવું / સભ્ય કાઢવું:</strong> ₹149</li>
        <li><strong>• રેશન કાર્ડ KYC અપડેટ:</strong> ₹99</li>
        <li><strong>• જરૂરી દસ્તાવેજો:</strong><br>
          - આધાર કાર્ડ (સभी સભ્યોના)<br>
          - જૂનું રેશન કાર્ડ (જો હોય)<br>
          - સરનામું પુરાવા (લાઇટ બિલ, રેશન કાર્ડ)<br>
          - જન્મ પ્રમાણપત્ર / લગ્ન સર્ટિફિકેટ (જરૂર મુજબ)<br>
          - પાસપોર્ટ સાઇઝ ફોટો<br>
          - રજિસ્ટર્ડ મોબાઇલ નંબર<br>
        </li>
      </ul> 
    </div>
    <p class="offer"><strong>• નોંધ:</strong> દરેક પ્રક્રિયા જિલ્લાની નિયમ મુજબ કરવામાં આવશે. 100% સહાય અને ફોલોઅપ ઉપલબ્ધ.</p>`,
  price: 249,
  images: [
    'img/ration1.jpg'
  ],
  visitLink: 'https://wa.me/919157437847?text=હું%20રેશન%20કાર્ડ%20સેવા%20વિશે%20માહિતી%20ચાહું%20છું',
  category: "document-services",
  subcategory: "government-docs",
  keywords: ["ration card", "name add", "name remove", "kyc", "new ration card", "government service"]
},

/* temporary closed */
/* {
  id: "widow-certificate-service",
  title: "વિધવા પ્રમાણપત્ર સેવા",
  titleHtml: `માત્ર <span class="highlight">₹299</span> માં વિધવા પ્રમાણપત્ર મેળવો`,
   voiceHtml: `<button class="voice-button" data-voice="voice/vidhva.mp3">
                <svg viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
            </button>
            `,

  shortDescription: "સરકારી સહાય અને પેન્શન માટે વિધવા પ્રમાણપત્ર ઝડપી અને સરળ રીતે મેળવો",
  longDescription: `
    વિધવા પ્રમાણપત્ર વિવિધ સરકારી યોજનાઓ જેમ કે પેન્શન, વિધવા સહાય વગેરે માટે જરૂરી છે. અમે તમને સહેલાઈથી ઓનલાઈન પ્રક્રિયા દ્વારા સહાય કરીએ છીએ.
    <div class="service-list"> 
      <ul> 
        <li><strong>• વિધવા પ્રમાણપત્ર સેવા:</strong> ₹249</li> 
        <li><strong>• જરૂરી દસ્તાવેજો:</strong><br>
          - અરજીકર્તાનો આધાર કાર્ડ<br>
          - પતિનું મરણ પત્ર (Death Certificate)<br>
          - લગ્નનો પુરાવો (લગ્નનો પ્રમાણપત્ર જો હોય)<br>
          - સરનામું પુરાવા<br>
          - રેશન કાર્ડ (જો હોય)<br>
          - પાસપોર્ટ સાઇઝ ફોટો<br>
          - રજિસ્ટર્ડ મોબાઇલ નંબર<br>
        </li>
      </ul> 
    </div>
    <p class="offer"><strong>• નોંધ:</strong> અરજી જિલ્લાની નિયમ મુજબ પ્રક્રિયા થશે. અમે પૂરી સહાયતા કરીશું અરજીથી લઈને પ્રમાણપત્ર સુધી.</p>`,
  price: 299,
  images: [
    'img/widow1.jpg',
    'img/widow2.jpg',
    'img/widow3.jpg'
  ],
  visitLink: 'https://wa.me/919157437847?text=હું%20વિધવા%20પ્રમાણપત્ર%20સેવા%20વિશે%20માહિતી%20ચાહું%20છું',
  category: "document-services",
  subcategory: "government-docs",
  keywords: ["widow certificate", "વિધવા પ્રમાણપત્ર", "death certificate", "government help", "pension"]
}, */
{
  id: "marriage-certificate-service",
  title: "લગ્ન સર્ટિફિકેટ સેવા",
  titleHtml: `માત્ર <span class="highlight">₹499</span> માં લગ્ન સર્ટિફિકેટ બનાવડાવો`,
  voiceHtml: `<button class="voice-button" data-voice="voice/marriage.mp3">
                <svg viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
              </button>`,

  shortDescription: "સરકારી રીતે માન્ય લગ્ન સર્ટિફિકેટ બનાવવા માટે સંપૂર્ણ માર્ગદર્શન અને સહાય.",
  longDescription: `
    લગ્ન કર્યા બાદ મેરેજ સર્ટિફિકેટ તમારા લગ્નને કાયદેસર માન્ય બનાવે છે. હવે એ સરળ રીતે ઘરે બેસી મેળવો – અમારી ટેકનિકલ સહાય સાથે સમગ્ર પ્રક્રિયા સરળતાથી પૂર્ણ કરો.
    <div class="service-list"> 
      <ul> 
        <li><strong>• લગ્ન સર્ટિફિકેટ સેવા:</strong> ₹499</li> 
        <li><strong>• જરૂરી દસ્તાવેજો:</strong><br>
        - પતિ અને પત્નીનો આધાર કાર્ડ<br>
        - ફોટો (લગ્ન સમયે લેવામાં આવેલ)<br>
        - લગ્ન નિમંત્રણ પત્ર / પંડિતનું પ્રમાણપત્ર<br>
        - 2 સાક્ષીનો આધાર કાર્ડ<br>
        - એડ્રેસ પ્રૂફ (અભ્યાસ, ભાડાની રસીદ, લાઇટ બિલ વગેરે)<br>
        - પાસપોર્ટ સાઇઝ ફોટો (પતિ અને પત્ની બંનેના)<br>
        </li>
      </ul> 
    </div>
    <p class="offer"><strong>• નોંધ:</strong> શહેર/ગામ મુજબ ડોક્યુમેન્ટ્સ અને પ્રક્રિયામાં થોડો ફરક હોઈ શકે છે.</p>`,
  
  price: 499,
  images: [
     'img/marriage1.jpg'
  ],
  visitLink: 'https://wa.me/919157437847?text=હું%20લગ્ન%20સર્ટિફિકેટ%20સેવા%20વિશે%20માહિતી%20ચાહું%20છું',
  category: "document-services",
  subcategory: "government-docs",
  keywords: ["marriage certificate", "લગ્ન પ્રમાણપત્ર", "government docs", "certificate"]
},
{
  id: "e-shram-card-service",
  title: "ઈ-શ્રમ કાર્ડ સેવા",
  titleHtml: `માત્ર <span class="highlight">₹૧૪૯</span> માં ઈ-શ્રમ કાર્ડ બનાવડાવો`,
  voiceHtml: `<button class="voice-button" data-voice="voice/eshram.mp3">
                <svg viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
            </button>`,

  shortDescription: "મજૂર વર્ગ માટે સરકારના ઈ-શ્રમ પોર્ટલ પર નોંધણી સેવા",
  longDescription: `
    ભારત સરકારની ઈ-શ્રમ યોજના હેઠળ શ્રમિક વર્ગના લોકો માટે કાર્ડ બનાવવાની સરળ અને સુરક્ષિત સેવા. હવે ઘરે બેસી જ તમારું ઈ-શ્રમ કાર્ડ મેળવો, માત્ર ₹99માં.
    <div class="service-list"> 
      <ul> 
        <li><strong>• ઈ-શ્રમ કાર્ડ બનાવવાની સેવા:</strong> ₹99</li> 
        <li><strong>• જરૂરી દસ્તાવેજો:</strong><br>
        - આધાર કાર્ડ<br>
        - રજિસ્ટર્ડ મોબાઇલ નંબર (આધાર સાથે જોડાયેલ)<br>
        - બેંક પાસબુક અથવા એકાઉન્ટ ડિટેઇલ્સ<br>
        - નોકરી/વ્યવસાય સંબંધિત માહિતી<br>
        </li>
      </ul> 
    </div>
    <p class="offer"><strong>• નોંધ:</strong> રજિસ્ટ્રેશન પછી તમારું યુનિક શ્રમ આઈ.ડી. મળશે જે ભવિષ્યની યોજનાઓ માટે ઉપયોગી રહેશે.</p>`,
  price: 149,
  images: [
    'img/eshram1.jpg'
  ],
  visitLink: 'https://wa.me/919157437847?text=હું%20ઈ-શ્રમ%20કાર્ડ%20સેવા%20વિશે%20માહિતી%20ચાહું%20છું',
  category: "document-services",
  subcategory: "government-docs",
  keywords: ["e-shram", "labour card", "government docs", "e shram registration"]
},
{
  id: "land-7-12-extract-service",
  title: "7/12 & 8A નકલ સેવા",
  titleHtml: `માત્ર <span class="highlight">₹20</span> માં 7/12 અને 8A ની નકલ મેળવો`,
  voiceHtml: `<button class="voice-button" data-voice="voice/7-12.mp3">
                <svg viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
              </button>`,
  shortDescription: "ખેડુતો માટે ઘરે બેઠા 7/12 નકલ મેળવવાની ઝડપી સેવા.",
  longDescription: `
    જમીન સાથે સંબંધિત 7/12 અને 8A ની નકલ હવે સરળતાથી મેળવો. અમારા દ્વારા ઓનલાઈન અરજી, સમર્થન અને ઓથોરાઈઝ્ડ નકલ ઉપલબ્ધ છે.
    <div class="service-list">
      <ul>
        <li><strong>• સેવા ફી:</strong> ₹149</li>
        <li><strong>• જરૂરી દસ્તાવેજો:</strong><br>
          - જમીન નો સર્વે નંબર / ખસરા નંબર<br>
          - જમીનનું ગામ, તાલુકા અને જિલ્લા વિગતો<br>
          - જમીન માલિકનું આધાર કાર્ડ<br>
          - નોંધાયેલ મોબાઇલ નંબર<br>
        </li>
      </ul>
    </div>
    <p class="offer"><strong>• નોંધ:</strong> પ્રમાણિત નકલ મેળવવા માટે અમુક કેસમાં એક્સ્ટ્રા ચાર્જ લાગૂ પડી શકે.</p>`,
  price: 149,
  images: [
    'img/7-12-1.jpg'
  ],
  visitLink: 'https://wa.me/919157437847?text=હું%207/12%20નકલ%20સેવા%20વિશે%20માહિતી%20માગું%20છું',
  category: "document-services",
  subcategory: "land-records",
  keywords: ["7/12", "8A", "land record", "ખેતરની નકલ", "khedut", "jamabandi"]
},
 {
  id: "scholarship-form-service",
  title: "સ્કોલરશીપ ફોર્મ સેવા",
  titleHtml: `માત્ર <span class="highlight">₹149</span> માં સ્કોલરશીપ ફોર્મ ભરો`,
   voiceHtml: `<button class="voice-button" data-voice="voice/scholarship.mp3">
                <svg viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
            </button>
            `,

  shortDescription: "તમારા બાળકો માટે સરકારી સ્કોલરશીપ ફોર્મ હવે સહેલાઈથી ભરો",
  longDescription: `
    સરકાર દ્વારા આપવામાં આવતી વિવિધ સ્કોલરશીપ યોજનાઓ માટે ફોર્મ ભરવાની સંપૂર્ણ સહાય. સમયસર ફોર્મ ભરીને લાભ મેળવો.
    <div class="service-list"> 
      <ul> 
        <li><strong>• સ્કોલરશીપ ફોર્મ ભરવાની સેવા:</strong> ₹149</li> 
        <li><strong>• જરૂરી દસ્તાવેજો:</strong><br>
          - વિદ્યાર્થીનો આધાર કાર્ડ<br>
          - સ્કૂલ/કૉલેજ ID કાર્ડ<br>
          - છેલ્લી પરીક્ષાનું માર્કશીટ<br>
          - આવક પ્રમાણપત્ર<br>
          - જાતિ પ્રમાણપત્ર (જો લાગુ પડે)<br>
          - બેંક પાસબુક<br>
          - પાસપોર્ટ સાઇઝ ફોટો<br>
          - મોબાઇલ નંબર<br>
        </li>
      </ul> 
    </div>
    <p class="offer"><strong>• નોંધ:</strong> અમારું સ્ટાફ દરેક સ્ટેટ / સેન્ટ્રલ સ્કોલરશીપ માટે માર્ગદર્શન આપે છે.</p>`,
  price: 149,
  images: [
    'img/scholarship1.jpg',
    'img/scholarship2.jpg',
    'img/scholarship3.jpg'
  ],
  visitLink: 'https://wa.me/919157437847?text=હું%20સ્કોલરશીપ%20ફોર્મ%20સેવા%20વિશે%20માહિતી%20ચાહું%20છું',
  category: "form-services",
  subcategory: "student-services",
  keywords: ["scholarship", "student help", "form fillup", "government scheme", "study support"]
},
{
  id: "admission-form-service",
  title: "એડમિશન ફોર્મ સેવા",
  titleHtml: `માત્ર <span class="highlight">₹149</span> માં એડમિશન ફોર્મ ભરો`,
   voiceHtml: `<button class="voice-button" data-voice="voice/admission.mp3">
                <svg viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
            </button>
            `,

  shortDescription: "સ્કૂલ/કૉલેજ એડમિશન માટે ફોર્મ ભરાવવાની સંપૂર્ણ સહાય",
  longDescription: `
    સ્કૂલ કે કૉલેજ એડમિશન માટે જરૂરી તમામ ઓનલાઇન અથવા મેન્યુઅલ ફોર્મ હવે ભરાવાનું કામ અમારું. સમય બચાવો અને ભૂલો ટાળો.
    <div class="service-list"> 
      <ul> 
        <li><strong>• એડમિશન ફોર્મ ભરવાની સેવા:</strong> ₹149</li> 
        <li><strong>• જરૂરી દસ્તાવેજો:</strong><br>
          - વિદ્યાર્થીનો આધાર કાર્ડ<br>
          - જન્મ પ્રમાણપત્ર<br>
          - છેલ્લી પરીક્ષાનું માર્કશીટ<br>
          - ટ્રાન્સફર સર્ટિફિકેટ (જો હોય)<br>
          - સ્કૂલ ID (જો હોય)<br>
          - પાસપોર્ટ સાઇઝ ફોટો<br>
          - રજિસ્ટર્ડ મોબાઇલ નંબર<br>
        </li>
      </ul> 
    </div>
    <p class="offer"><strong>• નોંધ:</strong> દરેક બોર્ડ અને યુનિવર્સિટી માટે અલગ-અલગ માર્ગદર્શન આપવામાં આવે છે.</p>`,
  price: 149,
  images: [
    'img/admission1.jpg',
    'img/admission2.jpg',
    'img/admission3.jpg'
  ],
  visitLink: 'https://wa.me/919157437847?text=હું%20એડમિશન%20ફોર્મ%20સેવા%20વિશે%20માહિતી%20ચાહું%20છું',
  category: "form-services",
  subcategory: "student-services",
  keywords: ["admission", "form fillup", "school admission", "college admission", "education"]
},
  {
  id: "resume-building-service",
  title: "તમારું રેસ્યુમે બનાવડાવો",
  titleHtml: `તમારું રેસ્યુમે બનાવડાવો <br><span class="highlight">માત્ર ₹149માં</span>`,
   voiceHtml: `<button class="voice-button" data-voice="voice/resume.mp3">
                <svg viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
            </button>
            `,

  shortDescription: "માત્ર ₹149માં વ્યાવસાયિક રીતે તૈયાર કરેલું રેસ્યુમે મેળવો.",
  longDescription: `અમે વ્યાવસાયિક અને ઉદ્યોગના પ્રમાણભૂત મુજબનું રેસ્યુમે બનાવવા ની સેવા આપે છીએ — આકર્ષક કિંમતમાં!
  <div class="service-list">
    <ul>
       <br>
      <li><strong>• Basic પેકેજ:</strong> ₹149 - ઉદ્યોગ અનુસાર કસ્ટમાઈઝ્ડ રેસ્યુમે</li>
        
      <li><strong>• જરૂરી દસ્તાવેજો:</strong><br>
        - તમારું નામ અને સંપર્ક વિગત<br>
        - એજ્યુકેશન વિગતો<br>
        - વર્તમાન અથવા પહેલાનું કામનું અનુભવ (જો હોય)<br>
        - કૌશલ્ય (Skills) અને ભાષાઓ<br>
        - તમારું કરંટ રેસ્યુમે (જો હોય)<br>
      </li>
    </ul>
   </div>`,
  price: 149,
          images: [
          'img/resume.png',
          'img/resume2.png'
        ],
 visitLink: 'https://wa.me/919157437847?text=હું%20મારું%20રેસ્યુમે%20બનાવાવવા%20માગું%20છું',
         category: "document-services",
        subcategory: "personal-docs",
        keywords: ["Resume", "resume", "રે", "identity", "uid"]
      }
    ]
  },
  {
  id: "event-services",
  title: "ઈવેન્ટ સેવાઓ",
  icon: "svg/icons/party.png",
  description: "તમામ પ્રકારની ઈવેન્ટ સેવાઓ જેમાં ડીજે સાઉન્ડ, ડેકોરેશન, કેટરિંગ, ફોટોગ્રાફી અને વધુ ઘણું સામેલ છે.",
  subcategories: [
     {
      id: "cameraman",
      name: "ફોટોગ્રાફર",
      icon: "https://cdn-icons-png.freepik.com/256/1920/1920996.png?uid=R204865109&ga=GA1.1.59614169.1748877786&semt=ais_hybrid"
    },
  {
  id: "beauty-care",
  name: "બ્યુટી અને કેર",
  icon: "svg/icons/beauty-icon.png"
},
    {
      id: "dj-sound",
      name: "ડીજે સાઉન્ડ",
      icon: "svg/icons/dj.png"
    },
    
    {
      id: "band",
      name: "બેન્ડ",
      icon: "https://cdn-icons-png.freepik.com/256/8605/8605582.png?uid=R204865109&ga=GA1.1.59614169.1748877786&semt=ais_hybrid"
    },
    {
      id: "mandap",
      name: "મંડપ",
      icon: "https://cdn-icons-png.freepik.com/256/2788/2788777.png?uid=R204865109&ga=GA1.1.59614169.1748877786&semt=ais_hybrid"
    }
   ],
  services: [
  {
  id: "khushi-photography-service",
  title: "Khushi photography",
  titleHtml: `Khushi photography<br><span class="highlight">booking only <br>₹15,999/-</span>`,
  voiceHtml: `<button class="voice-button" data-voice="voice/khushi-photography.mp3">
            <svg viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
        </button>`,
  
  shortDescription: "ખુશી ફોટોગ્રાફીના સાથે તમારી યાદોને કેદ કરો!",
  longDescription: `અમે લગ્ન, જન્મદિન, એંગેજમેન્ટ અને કોર્પોરેટ ઇવેન્ટ્સ માટે  ફોટોગ્રાફી સર્વિસ પ્રદાન કરીએ છીએ. 1 વર્ષના અનુભવ સાથે અમે તમારી દરેક ખાસ મોમેન્ટ્સને કેપ્ચર કરીએ છીએ.
  <div class="service-list"> 
    <ul> 
      <li><strong>• બેસિક ફોટોગ્રાફી પેકેજ:</strong> ₹15,999 </li>
      <li><strong>• પ્રીમિયમ ફોટો આલ્બમ મળશે:</strong></li>
       </ul> 
  </div>
  
  <div class="experience-info">
    <p><strong>અનુભવ:</strong> 1 વર્ષ | <strong>સ્થળ:</strong> ભરૂચ</p>
    <p><strong>સુવિધાઓ:</strong> પ્રોફેશનલ ફોટોગ્રાફી, ફોટો આલ્બમ</p>
  </div>`,
  
  price: 15999,
  experience: "1 year exp",
  location: "Bharuch",
  facilities: ["photography", "photo album", "digital copy"],
  advance: 5999,
  
  images: [
    'img/khushi1.jpg',
    'img/khushi2.jpg',
    'img/khushi3.jpg',
    'img/khushi4.jpg'
  ],
  
  visitLink: 'https://wa.me/919157437847?text=I%20want%20to%20book%20Khushi%20Photography%20for%20my%20event',
  category: "event-services",
  subcategory: "cameraman",
  keywords: ["khushi", "photography", "photo", "album", "wedding", "bharuch", "event", "photographer"]
},
/* {
  id: "krishna-photography-service",
  title: "Krishna Photography",
  titleHtml: `Krishna Photography<br><span class="highlight">booking only <br>₹15,999/-</span>`,
  voiceHtml: `<button class="voice-button" data-voice="voice/krishnaphotography.mp3">
            <svg viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
        </button>`,

  shortDescription: "કૃષ્ણ ફોટોગ્રાફી સાથે તમારી યાદોને અનમોલ બનાવો!",
  longDescription: `અમે લગ્ન, જન્મદિન, એંગેજમેન્ટ અને કોર્પોરેટ ઇવેન્ટ્સ માટે  વ્યાવસાયિક ફોટોગ્રાફી અને વિડીયોગ્રાફી સર્વિસ પ્રદાન કરીએ છીએ. 3 વર્ષના અનુભવ સાથે અમે તમારી દરેક ખાસ મોમેન્ટ્સને સુંદર રીતે કેપ્ચર કરીએ છીએ.
  <div class="service-list"> 
    <ul> 
      <li><strong>• બેસિક ફોટોગ્રાફી પેકેજ:</strong> ₹15,999 </li>
      <li><strong>• ડ્રોન શૂટ, પ્રિ-વેડિંગ શૂટ ઉપલબ્ધ:</strong></li>
    </ul> 
  </div>

  <div class="experience-info">
    <p><strong>અનુભવ:</strong> 3 વર્ષ | <strong>સ્થળ:</strong> જંબુસર</p>
    <p><strong>સુવિધાઓ:</strong> વિડીયોગ્રાફી, ફોટોશૂટ, ડ્રોન શૂટ, પ્રિ-વેડિંગ</p>
  </div>`,

  price: 15999,
  experience: "3 years exp",
  location: "Jambusar",
  facilities: ["videography", "photoshoot", "photography", "drone", "pre-wedding shoot"],
  advance: 5999,

  images: [
    'img/krishna1.jpg',
    'img/krishna2.jpg',
    'img/krishna3.jpg',
    'img/krishna4.jpg'
  ],

  visitLink: 'https://wa.me/919157437847?text=I%20want%20to%20book%20Krishna%20Photography%20for%20my%20event',
  category: "event-services",
  subcategory: "cameraman",
  keywords: ["krishna", "photography", "videography", "drone", "pre-wedding", "jambusar", "event", "photographer"]
},
 */  /* beauty services*/
/*   {
  id: "beauty-care",
  title: "હીના દુલ્હન મેકઅપ",
  titleHtml: `હીના દુલ્હન મેકઅપ<br><span class="highlight">પેકેજ શરૂ ₹2,999 થી</span>`,
  shortDescription: "તમારા ખાસ દિવસે શાનદાર દેખાવ માટે પેશેવર દુલ્હન મેકઅપ સેવા.",
  longDescription: `હીના દુલ્હન મેકઅપ સેવા તમારા ખાસ દિવસે સૌંદર્યમાં ચાર ચાંદ લગાવે છે. અનુભવી મેકઅપ આર્ટિસ્ટ દ્વારા ઘર બેઠક અથવા ઓન-સાઈટ સેવા ઉપલબ્ધ છે. પેકેજ અનુસાર મેકઅપ, હેરસ્ટાઇલ, સાડી ડ્રેપિંગ અને જ્વેલરી સેટિંગ જેવા વિકલ્પો ઉપલબ્ધ છે.
  <div class="service-list"> 
    <ul> 
      <li><strong>• બેઝિક પેકેજ:</strong> ₹2,999 – નેચરલ લુક મેકઅપ + હેરસ્ટાઇલ</li> 
      <li><strong>• સ્ટાન્ડર્ડ પેકેજ:</strong> ₹6,999 – મેકઅપ + હેરસ્ટાઇલ + સાડી ડ્રેપિંગ</li> 
      <li><strong>• પ્રીમિયમ પેકેજ:</strong> ₹8,999 – એઆરટિસ્ટ મેકઅપ + હેરસ્ટાઇલ + સાડી + જ્વેલરી સેટિંગ</li> 
      <li><strong>• સ્થાન:</strong> ઘર બેઠા સેવા ઉપલબ્ધ (શરતો લાગુ)</li>
    </ul> 
  </div>`,
  price: 2999,
  images: [
    'https://images.pexels.com/photos/279929/pexels-photo-279929.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg?auto=compress&cs=tinysrgb&w=400'
  ],
  visitLink: 'https://wa.me/919157437847?text=હું%20હીના%20દુલ્હન%20મેકઅપ%20સેવા%20બુક%20કરવા%20માગું%20છું',
  category: "event-services",
  subcategory: "beauty-care",
  keywords: ["bridal", "makeup", "dulhan", "wedding", "beauty", "hina", "bridal look"]
}
 *//* dj services */
/*     {
      id: "dev-dj-service",
      title: "દેવ ડીજે સાઉન્ડ",
      titleHtml: `દેવ ડીજે સાઉન્ડ<br><span class="highlight">બુકિંગ માત્ર ₹19,999 થી શરૂ</span>`,
       voiceHtml: `<button class="voice-button" data-voice="voice/service 02.mp3">
                <svg viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
            </button>
            `,

      shortDescription: "દેવ ડીજેના જબરદસ્ત સાઉન્ડ અને લાઇટિંગ સાથે તમારું ઇવેન્ટ યાદગાર બનાવડાવો!",
      longDescription: `અમે લગ્ન, જન્મદિન અને કોર્પોરેટ પાર્ટી જેવી તમામ પ્રકારની ઇવેન્ટ્સ માટે સંપૂર્ણ ડીજે સાઉન્ડ સોલ્યુશન્સ પ્રદાન કરીએ છીએ. શક્તિશાળી મ્યૂઝિક, પ્રોફેશનલ લાઇટિંગ અને ક્રાઉડને ઊર્જાથી ભરપુર કરવાનો અનુભવ લો દેવ ડીજે સાથે.
      <div class="service-list"> 
        <ul> 
          <li><strong>• બેસિક ડીજે સેટઅપ:</strong> ₹19,999 થી શરૂ</li>
          <li><strong>• પ્રીમિયમ લાઇટિંગ સાથે ડીજે:</strong> ₹29,999</li>
          <li><strong>• લગ્ન અને સંગીત પેકેજ:</strong> ₹49,999</li>
        </ul> 
      </div>`,
      price: 19999,
      images: [
        'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      visitLink: 'https://wa.me/919157437847?text=I%20want%20to%20book%20Dev%20DJ%20Sound%20for%20my%20event',
      category: "event-services",
      subcategory: "dj-sound",
      keywords: ["dev", "dj", "sound", "music", "party", "wedding", "event"]
    }*/
    
    
        ]
  },  
  {
    id: "Travels",
    title: "મુસાફરી સેવાઓ",
    icon: "svg/icons/travels.png",
    description: "EPFO, પાન કાર્ડ, આધાર સહિત તમામ દસ્તાવેજ સંબંધિત સેવાઓ.",
   subcategories: [
      {
        id: "privet",
        name: "ખાનગી મુસાફરી",
        icon: "svg/icons/pvt-car.png"
      },
      {
        id: "tour",
        name: "ટૂર અને ટ્રાવેલ્સ",
        icon: "svg/icons/pvt-bus.png"
       }
],
services: [
]
}
];

