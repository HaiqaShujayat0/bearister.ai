import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Search, Send, ChevronDown } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Lights SVG */}
      <div className="absolute top-0 left-0 right-0 w-full h-[140vh]">
        <svg 
          className="w-full h-full object-cover" 
          viewBox="0 0 1440 1166" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <g filter="url(#filter0_f_7479_12293)">
            <path d="M245.667 243.945C245.667 237.515 134.556 587.573 79 763.405L14 889H1439L1425.67 737.282L1327.33 243.945L1192.33 737.282L1160.67 144.474L969 737.282L924 144.474L747.333 737.282L694 215.812L599 737.282L552.333 563.458L494 737.282L450.667 113.327C399.556 313.609 297.333 715.78 297.333 722.21C297.333 730.248 245.667 251.983 245.667 243.945Z" fill="url(#paint0_radial_7479_12293)"/>
          </g>
          <g style={{mixBlendMode: 'soft-light'}} filter="url(#filter1_f_7479_12293)">
            <path d="M233.411 208.859C233.411 202.384 128.178 554.861 75.5614 731.909L14 858.371H1363.62L1350.99 705.604L1257.86 208.859L1130 705.604L1100.01 108.7L918.48 705.604L875.86 108.7L708.539 705.604L658.027 180.531L568.053 705.604L523.855 530.58L468.608 705.604L427.567 77.3376C379.159 279.003 282.345 683.954 282.345 690.429C282.345 698.522 233.411 216.952 233.411 208.859Z" fill="url(#paint1_radial_7479_12293)"/>
          </g>
          <g style={{mixBlendMode: 'overlay'}} filter="url(#filter2_f_7479_12293)">
            <path d="M569.897 149.702C569.897 142.332 535.957 543.534 518.987 745.056L499.132 889H934.414L930.341 715.115L900.304 149.702L859.067 715.115L849.394 35.6982L790.847 715.115L777.102 35.6982L723.137 715.115L706.846 117.459L677.827 715.115L663.572 515.896L645.753 715.115L632.517 0C616.904 229.543 585.68 690.472 585.68 697.842C585.68 707.054 569.897 158.914 569.897 149.702Z" fill="url(#paint2_radial_7479_12293)"/>
          </g>
          <g filter="url(#filter3_f_7479_12293)">
            <path d="M274.108 211.18C274.108 204.591 222.25 563.288 196.321 743.46L165.984 872.154H831.065L824.842 716.691L778.947 211.18L715.94 716.691L701.16 109.254L611.705 716.691L590.702 109.254L508.248 716.691L483.356 182.352L439.017 716.691L417.236 538.578L390.011 716.691L369.786 77.3376C345.932 282.562 298.222 694.659 298.222 701.248C298.222 709.484 274.108 219.416 274.108 211.18Z" fill="url(#paint3_radial_7479_12293)"/>
          </g>
          <g style={{mixBlendMode: 'lighten'}} filter="url(#filter4_f_7479_12293)">
            <path d="M816.793 211.18C816.793 204.591 768.822 563.288 744.836 743.46L716.773 872.154H1332L1326.25 716.691L1283.79 211.18L1225.51 716.691L1211.84 109.254L1129.09 716.691L1109.66 109.254L1033.38 716.691L1010.36 182.352L969.341 716.691L949.193 538.578L924.008 716.691L905.3 77.3376C883.233 282.562 839.099 694.659 839.099 701.248C839.099 709.484 816.793 219.416 816.793 211.18Z" fill="url(#paint4_radial_7479_12293)"/>
          </g>
          <defs>
            <filter id="filter0_f_7479_12293" x="-263" y="-163.673" width="1979" height="1329.67" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="138.5" result="effect1_foregroundBlur_7479_12293"/>
            </filter>
            <filter id="filter1_f_7479_12293" x="-121.164" y="-57.8261" width="1619.94" height="1051.36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="67.5819" result="effect1_foregroundBlur_7479_12293"/>
            </filter>
            <filter id="filter2_f_7479_12293" x="434.588" y="-64.5439" width="564.369" height="1018.09" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="32.2719" result="effect1_foregroundBlur_7479_12293"/>
            </filter>
            <filter id="filter3_f_7479_12293" x="98.4018" y="9.75579" width="800.245" height="929.98" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="33.7909" result="effect1_foregroundBlur_7479_12293"/>
            </filter>
            <filter id="filter4_f_7479_12293" x="649.191" y="9.75579" width="750.394" height="929.98" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="33.7909" result="effect1_foregroundBlur_7479_12293"/>
            </filter>
            <radialGradient id="paint0_radial_7479_12293" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(726.5 719.299) rotate(90) scale(294.246 235.557)">
              <stop stopColor="#FFAE47"/>
              <stop offset="0.580832" stopColor="#C7497D"/>
              <stop offset="1" stopColor="#7527AA"/>
            </radialGradient>
            <radialGradient id="paint1_radial_7479_12293" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(688.808 772.337) rotate(124.549) scale(142.574 86.7293)">
              <stop stopColor="#FFAE47"/>
              <stop offset="0.396078" stopColor="#C7497D"/>
              <stop offset="0.865984" stopColor="#7527AA" stopOpacity="0.01"/>
            </radialGradient>
            <radialGradient id="paint2_radial_7479_12293" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(716.773 889) rotate(90) scale(833.438 374.34)">
              <stop stopColor="#FFAE47"/>
              <stop offset="0.580832" stopColor="#C7497D"/>
              <stop offset="1" stopColor="#7527AA"/>
            </radialGradient>
            <radialGradient id="paint3_radial_7479_12293" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(498.524 512.61) rotate(90) scale(1063.89 816.636)">
              <stop stopColor="#FFAE47"/>
              <stop offset="0.105012" stopColor="#C7497D"/>
              <stop offset="0.338847" stopColor="#7527AA"/>
            </radialGradient>
            <radialGradient id="paint4_radial_7479_12293" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1024.39 558.517) rotate(90) scale(735.172 522.017)">
              <stop stopColor="#FFAE47"/>
              <stop offset="0.261203" stopColor="#C7497D"/>
              <stop offset="0.44837" stopColor="#7527AA"/>
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation Header */}
        <nav className="flex justify-between items-center px-4 sm:px-8 lg:px-16 py-8">
          <div className="flex items-center gap-4">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/07ee4757770b3900750f7393af76a4e06665a333?width=118"
              alt="BearisterAI Logo"
              className="w-[59px] h-[50px]"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/daf320d2ea87ab7eff6c12ab847117c15513029c?width=260"
              alt="BearisterAI Text"
              className="w-[130px] h-[20px]"
            />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-white font-['Outfit'] text-base font-normal leading-6 hover:text-white/80 transition-colors">Home</a>
            <a href="#" className="text-white font-['Outfit'] text-base font-normal leading-6 hover:text-white/80 transition-colors">Features</a>
            <a href="#" className="text-white font-['Outfit'] text-base font-normal leading-6 hover:text-white/80 transition-colors">Pricing</a>
            <a href="#" className="text-white font-['Outfit'] text-base font-normal leading-6 hover:text-white/80 transition-colors">FAQ</a>
          </div>
          <Link to="/signin">
          <Button
            className="flex px-4 sm:px-7 py-3 justify-center items-center gap-2 rounded-xl bg-white text-[#202939] font-['Outfit'] text-sm sm:text-base font-normal leading-6 hover:bg-white/90 shadow-[0_0_180px_0_rgba(153,23,255,0.25),0_0_0_0_rgba(255,255,255,0.07),0_-2px_8px_0_rgba(0,0,0,0.20)_inset,0_1px_2px_0_rgba(255,255,255,0.41)_inset]"
          >
            Sign In
          </Button>
          </Link>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col items-center gap-8 sm:gap-10 px-4 sm:px-6 py-8 sm:py-12">
          {/* Main Heading */}
          <div className="flex flex-col items-center gap-4 max-w-4xl">
            <h1 
              className="text-center font-['Outfit'] text-4xl sm:text-6xl lg:text-7xl font-medium leading-[44px] sm:leading-[64px] lg:leading-[80px] bg-clip-text text-transparent"
              style={{
                background: 'radial-gradient(101.8% 55.56% at 69.21% 88.33%, #D0D0D0 56.37%, #FFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Tools for the lawyers of tomorrow
            </h1>
            <p className="w-full max-w-[686px] text-[#D7D7D7] text-center font-['Outfit'] text-lg font-normal leading-[27px]">
              Research you can trust—backed by public case law. Drafts you can file with confidence, from first facts to final export.
            </p>
          </div>

          {/* Get Started Button */}
          <Link to="/signup">
          <Button 
            className="flex px-7 py-3 justify-center items-center gap-2 rounded-xl bg-white text-[#202939] font-['Outfit'] text-base font-normal leading-6 hover:bg-white/90 shadow-[0_0_180px_0_rgba(153,23,255,0.25),0_0_0_0_rgba(255,255,255,0.07),0_-2px_8px_0_rgba(0,0,0,0.20)_inset,0_1px_2px_0_rgba(255,255,255,0.41)_inset]"
          >
            Get Started
          </Button>
          </Link>

          {/* Chat Interface */}
          <div className="relative w-full max-w-4xl">
            {/* Top Left - Brief drafting */}
            <div className="hidden sm:block absolute -top-12 -left-16 z-20">
              <div className="relative">
                {/* Connecting SVG Path */}
                <svg className="absolute top-8 left-32 w-32 h-20" viewBox="0 0 130 89" fill="none">
                  <path d="M130 87H93.7281C90.4857 87 87.8571 83.6701 87.8571 79.5625V9.43751C87.8571 5.32989 85.2286 2 81.9862 2H3.8743e-06"
                    stroke="url(#briefDraftingGradient)" strokeWidth="4"/>
                  <defs>
                    <linearGradient id="briefDraftingGradient" x1="5.71428" y1="1.99999" x2="85.9579" y2="1.92564" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D7B5F1"/>
                      <stop offset="0.0991925" stopColor="white"/>
                      <stop offset="1" stopColor="#7E2ABD" stopOpacity="0.6"/>
                    </linearGradient>
                  </defs>
                </svg>
                {/* Connection Line */}
                <svg className="absolute top-0 left-28 w-12 h-2" viewBox="0 0 51 8" fill="none">
                  <path d="M51 4C33.8169 4 24.1831 4 7 4" stroke="url(#briefLineGradient)" strokeWidth="4"/>
                  <g filter="url(#briefFilter)">
                    <circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 7 1)" fill="white"/>
                  </g>
                  <defs>
                    <filter id="briefFilter" x="0.4" y="0.4" width="7.2" height="7.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="0.3" result="effect1_foregroundBlur"/>
                    </filter>
                    <linearGradient id="briefLineGradient" x1="9.8611" y1="4" x2="10.7425" y2="9.29073" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="#AF7CD6" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
                {/* Label */}
                <div
                  className="flex px-2 py-1.5 items-center gap-1.5 rounded-md border border-white/15"
                  style={{background: 'radial-gradient(86% 93.75% at 50% 100%, #FFAE47 0%, #C7497D 58.08%, #7527AA 100%)'}}
                >
                  <span className="text-white font-['Outfit'] text-base font-normal">Brief drafting</span>
                </div>
              </div>
            </div>

            {/* Top Right - Trusted legal */}
            <div className="hidden sm:block absolute -top-12 -right-16 z-20">
              <div className="relative">
                {/* Connecting SVG Path */}
                <svg className="absolute top-8 -left-32 w-32 h-20" viewBox="0 0 130 89" fill="none">
                  <path d="M0 87H36.2719C39.5143 87 42.1429 83.6701 42.1429 79.5625V9.43751C42.1429 5.32989 44.7714 2 48.0138 2H130"
                    stroke="url(#trustedGradient)" strokeWidth="4"/>
                  <defs>
                    <linearGradient id="trustedGradient" x1="124.286" y1="1.99999" x2="44.0421" y2="1.92564" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D7B5F1"/>
                      <stop offset="0.0991925" stopColor="white"/>
                      <stop offset="1" stopColor="#7E2ABD" stopOpacity="0.8"/>
                    </linearGradient>
                  </defs>
                </svg>
                {/* Connection Line */}
                <svg className="absolute top-0 -left-16 w-12 h-2" viewBox="0 0 51 8" fill="none">
                  <path d="M0 4C17.1831 4 26.8169 4 44 4" stroke="url(#trustedLineGradient)" strokeWidth="4"/>
                  <circle cx="47" cy="4" r="3" fill="white"/>
                  <defs>
                    <linearGradient id="trustedLineGradient" x1="41.1389" y1="4" x2="40.2575" y2="9.29073" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="#AF7CD6" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
                {/* Label */}
                <div
                  className="flex px-2 py-1.5 items-center gap-1.5 rounded-md border border-white/15"
                  style={{background: 'radial-gradient(86% 93.75% at 50% 100%, #FFAE47 0%, #C7497D 58.08%, #7527AA 100%)'}}
                >
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                    <path d="M17.835 4.51258C17.8245 4.46178 17.8016 4.41437 17.7683 4.37457C17.7351 4.33476 17.6925 4.30381 17.6443 4.28446L10.1159 1.27133C10.0414 1.24321 9.95917 1.24321 9.88465 1.27133L2.35621 4.28383C2.30808 4.30318 2.26549 4.33414 2.23223 4.37394C2.19897 4.41374 2.17607 4.46116 2.16558 4.51196C0.915584 10.3716 4.29059 16.5376 10.0003 18.7501C15.7097 16.5407 19.085 10.372 17.835 4.51196V4.51258ZM10.0003 17.1876C5.30965 15.3973 2.53746 10.322 3.55965 5.5154C3.57059 5.46479 3.59366 5.41759 3.62686 5.37785C3.66006 5.33812 3.70241 5.30704 3.75027 5.28727L9.88465 2.83415C9.95917 2.80603 10.0414 2.80603 10.1159 2.83415L16.2503 5.28727C16.2981 5.30704 16.3405 5.33812 16.3737 5.37785C16.4069 5.41759 16.43 5.46479 16.4409 5.5154C17.4634 10.322 14.6909 15.397 10.0003 17.1876ZM15.8596 5.80571C16.7322 10.072 14.2471 14.7629 10.0003 16.5316C5.77215 14.7282 3.28746 10.2188 4.1409 5.80602C4.1409 5.80602 9.88465 3.50915 9.99715 3.46227C10.0065 3.46227 15.7378 5.75915 15.8596 5.80602V5.80571Z"
                      fill="url(#shieldGradient)"/>
                    <defs>
                      <linearGradient id="shieldGradient" x1="1.90621" y1="10.0004" x2="12.0837" y2="23.75" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="#A1A1A1"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="text-white font-['Outfit'] text-base font-normal">Trusted legal</span>
                </div>
              </div>
            </div>

            {/* Bottom Left - Trial prep */}
            <div className="hidden sm:block absolute -bottom-16 -left-16 z-20">
              <div className="relative">
                {/* Connecting SVG Path */}
                <svg className="absolute -top-20 left-24 w-36 h-20" viewBox="0 0 143 89" fill="none">
                  <path d="M143 2H103.101C99.5342 2 96.6429 5.32989 96.6429 9.4375V79.5625C96.6429 83.6701 93.7515 87 90.1848 87H-2.20537e-06"
                    stroke="url(#trialGradient)" strokeWidth="4"/>
                  <defs>
                    <linearGradient id="trialGradient" x1="6.28571" y1="87" x2="100.109" y2="77.7565" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D7B5F1"/>
                      <stop offset="0.0991925" stopColor="white"/>
                      <stop offset="0.960515" stopColor="#7E2ABD" stopOpacity="0.44"/>
                    </linearGradient>
                  </defs>
                </svg>
                {/* Connection Line */}
                <svg className="absolute -top-2 left-20 w-12 h-2" viewBox="0 0 51 8" fill="none">
                  <path d="M51 4C33.8169 4 24.1831 4 7 4" stroke="url(#trialLineGradient)" strokeWidth="4"/>
                  <circle cx="4" cy="4" r="3" transform="rotate(180 4 4)" fill="white"/>
                  <defs>
                    <linearGradient id="trialLineGradient" x1="9.8611" y1="4" x2="10.7425" y2="-1.29073" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="#AF7CD6" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
                {/* Label */}
                <div
                  className="flex px-2 py-1.5 items-center gap-1.5 rounded-md border border-white/15"
                  style={{background: 'radial-gradient(86% 93.75% at 50% 100%, #FFAE47 0%, #C7497D 58.08%, #7527AA 100%)'}}
                >
                  <span className="text-white font-['Outfit'] text-base font-normal">Trial prep</span>
                </div>
              </div>
            </div>

            {/* Bottom Right - Document */}
            <div className="hidden sm:block absolute -bottom-16 -right-16 z-20">
              <div className="relative">
                {/* Connecting SVG Path */}
                <svg className="absolute -top-20 -left-36 w-36 h-20" viewBox="0 0 143 89" fill="none">
                  <path d="M0 2H39.8991C43.4658 2 46.3571 5.32989 46.3571 9.4375V79.5625C46.3571 83.6701 49.2485 87 52.8152 87H143"
                    stroke="url(#docGradient)" strokeWidth="4"/>
                  <defs>
                    <linearGradient id="docGradient" x1="136.714" y1="87" x2="57.5989" y2="91.9919" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D7B5F1"/>
                      <stop offset="0.0991925" stopColor="white"/>
                      <stop offset="1" stopColor="#7E2ABD" stopOpacity="0.54"/>
                    </linearGradient>
                  </defs>
                </svg>
                {/* Connection Line */}
                <svg className="absolute -top-2 -left-20 w-12 h-2" viewBox="0 0 51 8" fill="none">
                  <path d="M0 4C17.1831 4 26.8169 4 44 4" stroke="url(#docLineGradient)" strokeWidth="4"/>
                  <circle cx="3" cy="3" r="3" transform="matrix(1 0 0 -1 44 7)" fill="white"/>
                  <defs>
                    <linearGradient id="docLineGradient" x1="41.1389" y1="4" x2="40.2575" y2="-1.29073" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="#AF7CD6" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
                {/* Label */}
                <div
                  className="flex px-2 py-1.5 items-center gap-1.5 rounded-md border border-white/15"
                  style={{background: 'radial-gradient(86% 93.75% at 50% 100%, #FFAE47 0%, #C7497D 58.08%, #7527AA 100%)'}}
                >
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                    <path d="M17.0782 2.26392H16.4934V16.6311C16.4934 17.5856 15.7165 18.3625 14.762 18.3625H4.125V18.8951C4.125 19.5049 4.61999 19.9999 5.22985 19.9999H17.0761C17.686 19.9999 18.181 19.5049 18.181 18.8951V3.36876C18.181 2.7589 17.6881 2.26392 17.0782 2.26392Z"
                      fill="url(#docIconGradient)"/>
                    <path d="M8.8384 17.736H14.7615C15.3714 17.736 15.8664 17.241 15.8664 16.6312V1.10485C15.8664 0.494987 15.3714 0 14.7615 0H6.86889V0.365497C6.87305 0.403091 6.87516 0.442774 6.87516 0.482456V3.50877C6.87516 4.36717 6.17758 5.06474 5.31918 5.06474H2.29287C2.26154 5.06474 2.22812 5.06266 2.19679 5.06057H1.8125V16.6312C1.8125 17.241 2.30749 17.736 2.91735 17.736H8.8384ZM9.06187 13.9808H5.20014C4.91192 13.9808 4.678 13.7468 4.678 13.4586C4.678 13.1704 4.91192 12.9365 5.20014 12.9365H9.06396C9.35218 12.9365 9.5861 13.1704 9.5861 13.4586C9.5861 13.7468 9.35009 13.9808 9.06187 13.9808ZM12.9257 11.3158H5.20014C4.91192 11.3158 4.678 11.0819 4.678 10.7937C4.678 10.5054 4.91192 10.2715 5.20014 10.2715H12.9257C13.2139 10.2715 13.4478 10.5054 13.4478 10.7937C13.4478 11.0819 13.2139 11.3158 12.9257 11.3158ZM5.20014 7.44152H12.9257C13.2139 7.44152 13.4478 7.67544 13.4478 7.96366C13.4478 8.25188 13.2139 8.4858 12.9257 8.4858H5.20014C4.91192 8.4858 4.678 8.25188 4.678 7.96366C4.678 7.67544 4.91192 7.44152 5.20014 7.44152Z"
                      fill="url(#docIconGradient)"/>
                    <path d="M2.29109 4.43807H5.32576C5.83119 4.43389 6.24055 4.02454 6.24473 3.51911V0.482349C6.24473 0.202483 6.01499 0.0166016 5.77691 0.0166016C5.66204 0.0166016 5.54717 0.0583727 5.4511 0.154446L1.9611 3.64442C1.66871 3.93682 1.87547 4.43807 2.29109 4.43807Z"
                      fill="url(#docIconGradient)"/>
                    <defs>
                      <linearGradient id="docIconGradient" x1="1.81247" y1="8.86823" x2="12.4835" y2="21.2175" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="#A1A1A1"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="text-white font-['Outfit'] text-base font-normal">Document</span>
                </div>
              </div>
            </div>

            {/* Main Chat Container */}
            <div
              className="flex flex-col items-center gap-2 rounded-[21px] p-4 sm:p-8 backdrop-blur-[85px]"
              style={{
                background: 'radial-gradient(86% 93.75% at 50% 100%, rgba(255, 174, 71, 0.3) 0%, rgba(199, 73, 125, 0.4) 58.08%, rgba(117, 39, 170, 0.5) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
            >
              {/* Chat Input */}
              <div
                className="flex flex-col items-start gap-4 sm:gap-6 w-full max-w-[728px] rounded-[24px] p-4 sm:p-6 backdrop-blur-[23px]"
                style={{
                  background: 'rgba(199, 73, 125, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              >
                {/* Input Area */}
                <div className="flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 19L8 13.5L2.5 11L8 8.5L10.5 3L13 8.5L18.5 11L13 13.5L10.5 19ZM18.5 21L17.25 18.25L14.5 17L17.25 15.75L18.5 13L19.75 15.75L22.5 17L19.75 18.25L18.5 21Z" fill="url(#magicGradient)"/>
                    <defs>
                      <radialGradient id="magicGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.5 21) rotate(90) scale(16.875 17.1999)">
                        <stop stopColor="#FFF6EB"/>
                        <stop offset="0.580832" stopColor="#E4A7C0"/>
                        <stop offset="1" stopColor="#E7CEF7"/>
                      </radialGradient>
                    </defs>
                  </svg>
                  <span className="text-[#FCFCFD] font-['Manrope'] text-base font-medium">Ask Anything...</span>
                </div>

                {/* Bottom Actions */}
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-3">
                    <div className="flex p-2 items-center gap-2 rounded-[24px] border border-white/15">
                      <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 7H7.5C4.73858 7 2.5 9.23858 2.5 12C2.5 14.7614 4.73858 17 7.5 17H9.5C12.2614 17 14.5 14.7614 14.5 12M17 17H17.5C20.2614 17 22.5 14.7614 22.5 12C22.5 9.23858 20.2614 7 17.5 7H15.5C12.7386 7 10.5 9.23858 10.5 12" stroke="#CDD5DF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div 
                    className="flex p-[10px] justify-center items-center gap-2 rounded-[20px]"
                    style={{background: 'radial-gradient(86% 93.75% at 50% 100%, #FFAE47 0%, #C7497D 58.08%, #7527AA 100%)'}}
                  >
                    <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.25036 9.99983H4.66702M4.59648 10.2427L2.65071 16.055C2.49785 16.5116 2.42142 16.7399 2.47627 16.8805C2.5239 17.0026 2.6262 17.0952 2.75244 17.1304C2.8978 17.171 3.11736 17.0722 3.55647 16.8746L17.4827 10.6078C17.9113 10.4149 18.1256 10.3185 18.1918 10.1845C18.2494 10.0681 18.2494 9.93155 18.1918 9.81516C18.1256 9.68119 17.9113 9.58475 17.4827 9.39188L3.55161 3.12293C3.11383 2.92593 2.89493 2.82742 2.74971 2.86783C2.6236 2.90292 2.5213 2.99524 2.47351 3.11711C2.41847 3.25744 2.49408 3.48526 2.64531 3.94088L4.59702 9.8211C4.62299 9.89936 4.63598 9.93848 4.64111 9.9785C4.64565 10.014 4.64561 10.05 4.64097 10.0855C4.63574 10.1255 4.62265 10.1646 4.59648 10.2427Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex items-start gap-3 sm:gap-4 flex-wrap justify-center mt-4">
                <div 
                  className="flex px-3 py-3 justify-center items-center gap-2 rounded-xl backdrop-blur-[40.5px]"
                  style={{background: '#AC68A0'}}
                >
                  <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.08365 11.3334H7.08365M12.917 11.3334H17.917M10.0003 6.33341V18.0001M10.0003 6.33341C11.1509 6.33341 12.0836 5.40067 12.0836 4.25008M10.0003 6.33341C8.84972 6.33341 7.91698 5.40068 7.91698 4.25008M3.33365 18.0001L16.667 18.0001M3.33365 4.25009L7.91698 4.25008M7.91698 4.25008C7.91698 3.09949 8.84972 2.16675 10.0003 2.16675C11.1509 2.16675 12.0836 3.09949 12.0836 4.25008M12.0836 4.25008L16.667 4.25008M7.40068 12.447C7.06677 13.7256 5.93207 14.6667 4.58365 14.6667C3.23523 14.6667 2.10053 13.7256 1.76662 12.447C1.73933 12.3426 1.72569 12.2903 1.72438 12.0816C1.72357 11.9537 1.77112 11.6587 1.81208 11.5375C1.8789 11.3398 1.95124 11.2282 2.09591 11.005L4.58365 7.16675L7.07139 11.005C7.21606 11.2282 7.28839 11.3398 7.35522 11.5375C7.39618 11.6587 7.44373 11.9537 7.44292 12.0816C7.4416 12.2903 7.42796 12.3426 7.40068 12.447ZM18.234 12.447C17.9001 13.7256 16.7654 14.6667 15.417 14.6667C14.0686 14.6667 12.9339 13.7256 12.5999 12.447C12.5727 12.3426 12.559 12.2903 12.5577 12.0816C12.5569 11.9537 12.6044 11.6587 12.6454 11.5375C12.7122 11.3398 12.7846 11.2282 12.9292 11.005L15.417 7.16675L17.9047 11.005C18.0494 11.2282 18.1217 11.3398 18.1885 11.5375C18.2295 11.6587 18.2771 11.9537 18.2763 12.0816C18.2749 12.2903 18.2613 12.3426 18.234 12.447Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[#E3E8EF] font-['Manrope'] text-sm font-semibold">Get Jury Instruction</span>
                </div>

                <div 
                  className="flex px-3 py-3 justify-center items-center gap-2 rounded-xl backdrop-blur-[40.5px]"
                  style={{background: '#AC68A0'}}
                >
                  <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6666 2.39136V5.83348C11.6666 6.30018 11.6666 6.53354 11.7574 6.7118C11.8373 6.8686 11.9648 6.99609 12.1216 7.07598C12.2999 7.16681 12.5332 7.16681 12.9999 7.16681H16.442M13.3333 11.3334H6.66659M13.3333 14.6667H6.66659M8.33325 8.00008H6.66659M11.6666 2.16675H7.33325C5.93312 2.16675 5.23306 2.16675 4.69828 2.43923C4.22787 2.67892 3.84542 3.06137 3.60574 3.53177C3.33325 4.06655 3.33325 4.76662 3.33325 6.16675V14.8334C3.33325 16.2335 3.33325 16.9336 3.60574 17.4684C3.84542 17.9388 4.22787 18.3212 4.69828 18.5609C5.23306 18.8334 5.93312 18.8334 7.33325 18.8334H12.6666C14.0667 18.8334 14.7668 18.8334 15.3016 18.5609C15.772 18.3212 16.1544 17.9388 16.3941 17.4684C16.6666 16.9336 16.6666 16.2335 16.6666 14.8334V7.16675L11.6666 2.16675Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[#E3E8EF] font-['Manrope'] text-sm font-semibold">Draft a Motion</span>
                </div>

                <div 
                  className="flex px-3 py-3 justify-center items-center gap-2 rounded-xl backdrop-blur-[40.5px]"
                  style={{background: 'rgba(255, 255, 255, 0.15)'}}
                >
                  <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.50008 10.5001L9.16675 12.1667L12.9167 8.41675M6.11155 3.68233C6.78142 3.62887 7.41734 3.36546 7.92881 2.9296C9.12235 1.91246 10.8778 1.91246 12.0714 2.9296C12.5828 3.36546 13.2187 3.62887 13.8886 3.68233C15.4518 3.80707 16.6931 5.04837 16.8178 6.61155C16.8713 7.28142 17.1347 7.91734 17.5706 8.42881C18.5877 9.62235 18.5877 11.3778 17.5706 12.5714C17.1347 13.0828 16.8713 13.7187 16.8178 14.3886C16.6931 15.9518 15.4518 17.1931 13.8886 17.3178C13.2187 17.3713 12.5828 17.6347 12.0714 18.0706C10.8778 19.0877 9.12235 19.0877 7.92881 18.0706C7.41734 17.6347 6.78142 17.3713 6.11155 17.3178C4.54837 17.1931 3.30707 15.9518 3.18233 14.3886C3.12887 13.7187 2.86546 13.0828 2.4296 12.5714C1.41246 11.3778 1.41246 9.62235 2.4296 8.42881C2.86546 7.91734 3.12887 7.28142 3.18233 6.61155C3.30707 5.04837 4.54837 3.80707 6.11155 3.68233Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[#E3E8EF] font-['Manrope'] text-sm font-semibold">Check Penalties</span>
                </div>

                <div 
                  className="flex px-3 py-3 justify-center items-center gap-2 rounded-xl backdrop-blur-[40.5px]"
                  style={{background: '#AC68A0'}}
                >
                  <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2627 13.2984C14.0371 13.5535 13.8004 13.8053 13.5529 14.0529C9.97304 17.6327 5.48813 18.9518 3.5355 16.9991C2.19684 15.6605 2.39592 13.1316 3.80697 10.5201M5.74131 7.77096C5.97607 7.50404 6.22302 7.24055 6.48178 6.98178C10.0616 3.40198 14.5465 2.08288 16.4991 4.03551C17.8387 5.3751 17.6384 7.90654 16.2247 10.5199M13.5529 6.98178C17.1327 10.5616 18.4518 15.0465 16.4991 16.9991C14.5465 18.9518 10.0616 17.6327 6.48178 14.0529C2.90198 10.473 1.58288 5.98813 3.5355 4.0355C5.48813 2.08288 9.97304 3.40198 13.5529 6.98178ZM10.8333 10.4999C10.8333 10.9601 10.4602 11.3332 9.99997 11.3332C9.53973 11.3332 9.16664 10.9601 9.16664 10.4999C9.16664 10.0397 9.53973 9.66658 9.99997 9.66658C10.4602 9.66658 10.8333 10.0397 10.8333 10.4999Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[#E3E8EF] font-['Manrope'] text-sm font-semibold">Analyze Police Report</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the sections continue with the same styling... */}
      {/* Partnership Section */}
      <section className="relative z-10 flex flex-col justify-center items-center gap-2 py-24 lg:py-32 px-4 lg:px-16 min-h-[690px]">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 flex justify-center items-center">
          <svg
            className="absolute w-[407px] h-[215px] opacity-80"
            style={{
              filter: 'blur(235px)',
              mixBlendMode: 'lighten'
            }}
            viewBox="0 0 1349 1157"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g style={{mixBlendMode: 'lighten'}} filter="url(#filter0_f_partnership)">
              <path d="M537.167 507.205C537.167 505.422 505.432 602.451 489.565 651.188L471 686H878L874.192 643.947L846.106 507.205L807.549 643.947L798.504 479.633L743.761 643.947L730.909 479.633L680.45 643.947L665.218 499.407L638.084 643.947L624.756 595.767L608.095 643.947L595.718 471C581.12 526.514 551.924 637.987 551.924 639.769C551.924 641.997 537.167 509.433 537.167 507.205Z" fill="url(#paint0_radial_partnership)"/>
            </g>
            <defs>
              <filter id="filter0_f_partnership" x="0.42" y="0.42" width="1348.16" height="1156.16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="235.29" result="effect1_foregroundBlur"/>
              </filter>
              <radialGradient id="paint0_radial_partnership" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(674.5 601.16) rotate(90) scale(198.866 345.335)">
                <stop stopColor="#FFAE47"/>
                <stop offset="0.261203" stopColor="#C7497D"/>
                <stop offset="0.44837" stopColor="#7527AA"/>
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="relative flex flex-col justify-center items-center gap-20 w-full max-w-7xl">
          {/* Section Title */}
          <h2
            className="text-center font-['Outfit'] text-4xl lg:text-[56px] font-medium leading-[66px] bg-clip-text text-transparent max-w-[628px]"
            style={{
              background: 'radial-gradient(101.8% 55.56% at 69.21% 88.33%, #FFF 12.5%, #C7C7C7 31.25%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            The leading law information platform
          </h2>

          {/* Cards Container */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-3 w-full max-w-4xl mx-auto">
            {/* Court Listener Card */}
            <div className="group flex p-6 md:p-8 items-center rounded-[24px] bg-[#0F0F0F] flex-1 min-h-[280px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(117,39,170,0.35)] relative overflow-hidden"
                 style={{
                   background: 'linear-gradient(135deg, #0F0F0F 0%, #0F0F0F 100%)',
                   border: '1px solid transparent',
                   backgroundClip: 'padding-box'
                 }}>
              <div className="absolute inset-0 rounded-[24px] p-[1px]"
                   style={{
                     background: 'linear-gradient(135deg, #C7497D 0%, #7527AA 50%, #FFAE47 100%)',
                     mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                     maskComposite: 'exclude'
                   }}></div>
              <div className="flex flex-col items-start gap-8 w-full">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e79c27606212ff0daaa07eb6afbb5f589de94aff?width=374"
                  alt="Court Listener Logo"
                  className="w-[187px] h-[90px] object-contain"
                />
                <p className="text-[#B7B7B7] font-['Outfit'] text-xl font-normal leading-6">
                  Uses daily indexes from open-source corpus of federal & state opinions and RECAP dockets.
                </p>
              </div>
            </div>

            {/* Gov.info Card */}
            <div className="group flex p-6 md:p-8 items-center rounded-[24px] bg-[#0F0F0F] flex-1 min-h-[280px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(117,39,170,0.35)] relative overflow-hidden"
                 style={{
                   background: 'linear-gradient(135deg, #0F0F0F 0%, #0F0F0F 100%)',
                   border: '1px solid transparent',
                   backgroundClip: 'padding-box'
                 }}>
              <div className="absolute inset-0 rounded-[24px] p-[1px]"
                   style={{
                     background: 'linear-gradient(135deg, #C7497D 0%, #7527AA 50%, #FFAE47 100%)',
                     mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                     maskComposite: 'exclude'
                   }}></div>
              <div className="flex flex-col items-start gap-8 w-full">
                <svg
                  className="w-[172px] h-[90px]"
                  viewBox="0 0 172 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_govinfo)">
                    <path opacity="0.16" d="M-5.125 0H179.726L179.769 0.204335C118.21 0.226035 56.648 0.204335 -4.91162 0.213377C-4.91523 21.4191 -4.908 42.6266 -4.91523 63.8322C-4.93512 64.0058 -4.97672 64.3548 -4.99661 64.5284L-5.00203 64.5555H-5.125V0Z" fill="#222425"/>
                    <path d="M135.086 12.1713C137.052 10.0899 140.077 9.51309 142.828 9.53117C142.83 11.2707 142.826 13.0103 142.831 14.7499C141.752 14.8529 140.578 14.9741 139.746 15.7498C138.84 16.6088 138.636 17.927 138.71 19.1187C139.824 19.1205 140.938 19.1241 142.054 19.115C142.171 20.9595 142.074 22.813 142.104 24.661C140.974 24.6683 139.844 24.661 138.714 24.6665C138.71 29.5741 138.712 34.48 138.712 39.3877C139.842 39.3931 140.971 39.3859 142.103 39.3931C142.11 41.2321 142.104 43.0711 142.104 44.9101C138.989 44.9174 135.871 44.9101 132.753 44.9138C132.829 38.1653 132.77 31.415 132.788 24.6647C131.688 24.6647 130.589 24.6628 129.491 24.6683C129.48 22.8166 129.46 20.9649 129.5 19.115C130.594 19.1259 131.688 19.1205 132.782 19.1205C132.775 16.6558 133.292 13.985 135.086 12.1713Z" fill="#CCCCCC"/>
                    <path d="M90.6482 10.4229C92.6175 10.4265 94.5886 10.4247 96.5597 10.4247C96.5651 12.5223 96.5633 14.6199 96.5597 16.7175C94.5886 16.7193 92.6157 16.7175 90.6446 16.7175C90.6428 14.6199 90.6355 12.5223 90.6482 10.4229Z" fill="#CCCCCC"/>
                    <path d="M154.407 18.4967C157.217 18.0555 160.161 18.5835 162.662 19.9271C165.682 21.5328 168.04 24.3284 169.118 27.5725C170.002 30.1366 170.045 32.9702 169.333 35.5795C168.449 38.8073 166.351 41.697 163.515 43.4853C159.752 45.9193 154.752 46.2737 150.691 44.375C147.555 42.9411 145.029 40.2485 143.766 37.0424C142.783 34.5977 142.54 31.8635 143.045 29.2795C143.627 26.2145 145.349 23.3899 147.766 21.4243C149.66 19.8674 151.984 18.853 154.407 18.4967ZM155.117 24.276C152.597 24.6973 150.327 26.4098 149.28 28.7461C147.631 32.2614 149.116 36.858 152.495 38.7621C155.535 40.5794 159.761 39.8435 162.056 37.1618C163.591 35.4421 164.32 33.0136 163.904 30.7388C163.566 28.5309 162.212 26.5273 160.342 25.3194C158.806 24.3556 156.908 23.9324 155.117 24.276Z" fill="#CCCCCC"/>
                    <path d="M9.52636 20.8039C12.1756 19.0951 15.4378 18.3483 18.5645 18.7859C21.5736 19.1837 24.4434 20.7732 26.2644 23.2198C26.5646 23.6014 26.8087 24.0245 26.9968 24.4711C27.1957 22.6882 27.0329 20.8853 27.0962 19.0933C28.2048 19.0915 29.3133 19.0969 30.4236 19.0897C30.3404 26.5272 30.4019 33.9664 30.3838 41.4039C30.3657 43.8975 30.1704 46.4996 28.9751 48.7419C27.3132 51.8304 24.3132 54.154 20.9207 55.0293C17.805 55.8918 14.4053 55.6278 11.4432 54.3421C8.539 53.1052 6.1122 50.6876 5.10676 47.6677C6.35452 47.6479 7.60228 47.6659 8.85004 47.6569C10.0978 50.0872 12.4631 51.8666 15.125 52.4506C19.9913 53.6965 25.4742 50.4181 26.7418 45.5756C27.1939 43.5394 27.1487 41.4201 27.0058 39.3515C25.1993 43.2537 20.8376 45.6931 16.5843 45.5267C14.8411 45.5918 13.1304 45.1108 11.5246 44.4761C9.07789 43.4725 6.77225 41.8577 5.42865 39.5323C3.73242 36.4817 2.87527 32.8471 3.61488 29.3879C4.20259 25.8273 6.50642 22.7135 9.52636 20.8039ZM15.8917 21.7515C14.1973 21.9052 12.568 22.558 11.1701 23.5164C8.16467 25.576 6.33463 29.2721 6.65832 32.9158C6.8482 36.0568 8.6674 38.997 11.2714 40.7294C13.4903 42.2122 16.3022 42.8577 18.9298 42.3189C21.4886 41.8523 23.8304 40.3424 25.3403 38.2267C27.0402 35.8886 27.7472 32.8254 27.1342 29.99C26.6062 27.4042 25.06 25.0335 22.8828 23.5363C20.8737 22.1222 18.3348 21.4441 15.8917 21.7515Z" fill="#CCCCCC"/>
                    <path d="M115.664 18.9507C119.01 17.9579 122.829 18.8368 125.411 21.1821C127.135 22.7155 128.078 25.0048 128.078 27.2977C128.111 31.3175 128.098 35.3391 128.086 39.3607C129.033 39.4602 130.021 39.2938 130.947 39.4512C130.984 41.2703 130.954 43.093 130.959 44.914C127.095 44.9122 123.232 44.9122 119.368 44.914C119.371 43.0695 119.339 41.2233 119.386 39.3788C120.335 39.3969 121.286 39.3987 122.236 39.3752C122.23 36.3753 122.236 33.3753 122.234 30.3754C122.194 28.8637 121.975 27.22 120.896 26.0681C118.67 23.7571 114.53 23.8168 112.331 26.1368C111.181 27.3664 110.952 29.1313 110.894 30.7425C110.876 33.6231 110.89 36.5055 110.887 39.3861C111.84 39.3933 112.794 39.3879 113.747 39.3915C113.753 41.2323 113.749 43.0731 113.751 44.914C109.72 44.914 105.689 44.9122 101.657 44.914C101.659 43.0731 101.655 41.2323 101.66 39.3915C102.76 39.3897 103.859 39.3915 104.959 39.3897C104.959 34.482 104.962 29.5725 104.957 24.6649C103.858 24.6649 102.76 24.6649 101.66 24.6649C101.659 22.8168 101.65 20.9669 101.666 19.1189C104.735 19.1243 107.803 19.1207 110.872 19.1207C110.903 20.3196 110.876 21.5166 110.89 22.7155C111.925 20.9091 113.65 19.5076 115.664 18.9507Z" fill="#CCCCCC"/>
                    <path d="M45.0035 19.2289C48.3833 18.7714 51.9222 19.737 54.6347 21.8003C57.132 23.6574 58.9332 26.4349 59.5896 29.48C60.19 32.196 59.8428 35.0821 58.7433 37.6263C57.4919 40.5087 55.1917 42.9246 52.3562 44.2844C48.4592 46.1795 43.64 45.995 39.9039 43.7962C36.9744 42.109 34.7303 39.2628 33.8152 36.0043C32.817 32.6427 33.2981 28.9014 35.0268 25.8617C37.054 22.2342 40.8786 19.7063 45.0035 19.2289ZM45.5713 22.3464C42.772 22.6266 40.1173 24.1347 38.4645 26.415C36.8298 28.6066 36.1661 31.5017 36.7068 34.1852C37.148 36.6408 38.5712 38.8903 40.5549 40.3948C42.4718 41.8631 44.9384 42.5828 47.3435 42.4002C50.0614 42.2049 52.6709 40.845 54.3834 38.7239C56.2351 36.4799 57.0525 33.3967 56.4883 30.5324C56.047 28.0388 54.6004 25.7405 52.5569 24.245C50.5786 22.7568 48.0288 22.0823 45.5713 22.3464Z" fill="#CCCCCC"/>
                    <path d="M59.2734 19.2146C60.5863 19.2201 61.9028 19.1731 63.2138 19.2327C64.2518 21.6504 65.1397 24.1494 66.1271 26.596C68.0349 31.4911 69.9354 36.3879 71.8577 41.2775C71.9734 41.1762 72.0675 41.0587 72.138 40.9249C75.0693 33.6845 78.0223 26.4532 80.9573 19.2146C82.1888 19.202 83.4221 19.211 84.6535 19.2092C81.0278 27.7769 77.4147 36.3517 73.7818 44.9175C72.5304 44.9139 71.2772 44.9067 70.0259 44.9211C66.3983 36.3716 62.863 27.7823 59.2734 19.2146Z" fill="#CCCCCC"/>
                    <path d="M87.3345 24.6685C87.32 22.8186 87.2965 20.9651 87.3471 19.1152C90.4177 19.1297 93.4883 19.117 96.5588 19.1207C96.5697 25.8764 96.5588 32.6321 96.5643 39.3879C97.6746 39.3933 98.7849 39.3861 99.8952 39.3933C99.9007 41.2323 99.8952 43.0713 99.8989 44.9103C95.7035 44.9158 91.5081 44.914 87.3128 44.9122C87.3146 43.0713 87.3092 41.2323 87.3164 39.3915C88.4249 39.3861 89.5334 39.3933 90.6437 39.3879C90.6419 34.4802 90.6456 29.5743 90.6419 24.6667C89.5388 24.6648 88.4358 24.6612 87.3345 24.6685Z" fill="#CCCCCC"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_govinfo">
                      <rect width="172" height="90" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-[#B7B7B7] font-['Outfit'] text-xl font-normal leading-6">
                  Ingests authenticated PDFs from govinfo's Federal Register, CFR & public-law archive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lawyers Choose Section */}
      <section
        className="relative z-10 py-24"
        style={{
          background:
            'radial-gradient(80% 120% at 100% 0%, rgba(117,39,170,0.18) 0%, rgba(199,73,125,0.10) 35%, rgba(0,0,0,0.00) 70%), #0B0A10'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Why lawyers choose Obie</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-white">court-ready work, faster</h3>
            </div>
            <p className="text-gray-300/90 max-w-md lg:text-right lg:mt-2">
              Cited research you can verify, file-ready drafts you can trust—real-world results that stand up in court.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                rating: 5,
                text: "It's exactly what we needed... I really love the results. They have been spot on with the law and have even helped me come up with new ways to attack a case as a seasoned veteran, to help me gain an advantage up in court for my first year out of a seasoned veteran.",
                author: "Blacknell",
                title: "Blacknell Strategic Solutions",
                avatar: "👤"
              },
              {
                rating: 5,
                text: "Finally found a user-friendly, afforded tool that feels like the future. We are standing on the edge of AI revolution—BearisterAI feels natural and a first-class beacon of justice for all.",
                author: "Stephanie Grimaldi",
                title: "Grimaldi Law",
                avatar: "👩‍💼"
              },
              {
                rating: 5,
                text: "From first facts to a polished brief in a single session—fewer late work outcomes.",
                author: "Rocky Roy",
                title: "Criminal Counsel",
                avatar: "👨‍💼"
              },
              {
                rating: 5,
                text: "The motion writing feature on BearisterAI is very easy to use and report from other AI apps. It's like having a paralegal available to you 24/7 right in your pocket.",
                author: "Leah Rosario",
                title: "Public Defender in Ventura County",
                avatar: "👩‍⚖️"
              },
              {
                rating: 5,
                text: "YES! This is exactly what we needed.",
                author: "Tiffiny Blacknell",
                title: "Blacknell Strategic Solutions",
                avatar: "👤"
              },
              {
                rating: 5,
                text: "From first facts to a polished brief in a single session—fewer late rate, better outcomes.",
                author: "Jesse Duran",
                title: "Law office of Jesse Duran",
                avatar: "⚖️"
              }
            ].map((review, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700/50 p-6 backdrop-blur-md">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm mb-4 text-gray-300">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                      <span>{review.avatar}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-white">{review.author}</p>
                      <p className="text-xs text-gray-400">{review.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 flex flex-col items-center gap-2 py-[120px] px-16 bg-black">
        <div className="flex flex-col items-center gap-20 w-full max-w-7xl">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-4 max-w-[584px]">
            <h2
              className="text-center font-['Outfit'] text-4xl lg:text-[56px] font-medium leading-[66px] bg-clip-text text-transparent"
              style={{
                background: 'radial-gradient(101.8% 55.56% at 69.21% 88.33%, #FFF 12.5%, #C7C7C7 31.25%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Features built for the way lawyers work
            </h2>
            <p className="text-[#B7B7B7] text-center font-['Outfit'] text-lg font-normal leading-[27px] max-w-[541px]">
              Obie brings AI-powered research, drafting, and prep—made for attorneys and law students.
            </p>
          </div>

          {/* Features Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 w-full justify-center">
            {/* AI Chat Assistant Card */}
            <div className="group flex p-8 items-center gap-2 rounded-xl bg-[#0F0F0F] flex-1 max-w-[304px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(117,39,170,0.35)] border border-transparent hover:border-[#FFAE47]/40">
              <div className="flex flex-col items-start gap-8 w-full h-full">
                <div className="w-full flex-1 relative">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/747c724bceebcb94eec6a3e6fba0e56f05213bfa?width=456"
                    alt="AI Chat Dashboard"
                    className="w-[228px] h-[162px] object-cover rounded-lg shadow-[0_1px_23px_0_rgba(0,0,0,0.43)] transform -rotate-[21.255deg] absolute top-0 left-0"
                  />
                </div>
                <div className="flex flex-col items-start gap-2 w-full mt-[140px]">
                  <h3 className="text-white font-['Outfit'] text-2xl font-medium leading-9">
                    AI Chat Assistant
                  </h3>
                  <p className="text-[#B7B7B7] font-['Outfit'] text-base font-normal leading-6">
                    Get rapid case analysis through our smart chat interface.
                  </p>
                </div>
              </div>
            </div>

            {/* Document Analysis Card */}
            <div className="group flex p-8 items-center gap-2 rounded-xl bg-[#0F0F0F] flex-1 max-w-[304px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(117,39,170,0.35)] border border-transparent hover:border-[#FFAE47]/40">
              <div className="flex flex-col justify-center items-center gap-8 w-full">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1db573d0148e9fa2e71e61dbbc3486494c60f6a6?width=340"
                  alt="Document Analysis Interface"
                  className="w-[170px] h-[202px] object-cover shadow-[0_1px_23px_0_rgba(0,0,0,0.43)]"
                />
                <div className="flex flex-col items-start gap-2 w-full">
                  <h3 className="text-white font-['Outfit'] text-2xl font-medium leading-9">
                    Document Analysis
                  </h3>
                  <p className="text-[#B7B7B7] font-['Outfit'] text-base font-normal leading-6">
                    AI-powered document review faster, cited, export-ready.
                  </p>
                </div>
              </div>
            </div>

            {/* Case Strategies Card */}
            <div className="group flex p-8 items-center gap-2 rounded-xl bg-[#0F0F0F] flex-1 max-w-[304px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(117,39,170,0.35)] border border-transparent hover:border-[#FFAE47]/40">
              <div className="flex flex-col justify-center items-start gap-8 w-full">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a762958e494f4e51e6e161d7b53df16b59c15d05?width=486"
                  alt="Case Strategies Dashboard"
                  className="w-[243px] h-[202px] object-cover shadow-[0_1px_23px_0_rgba(0,0,0,0.43)]"
                />
                <div className="flex flex-col items-start gap-2 w-full">
                  <h3 className="text-white font-['Outfit'] text-2xl font-medium leading-9">
                    Case Strategies
                  </h3>
                  <p className="text-[#B7B7B7] font-['Outfit'] text-base font-normal leading-6 max-w-[265px]">
                    Map the case from every perspective and out-prepare opposing counsel.
                  </p>
                </div>
              </div>
            </div>

            {/* Jury Selection Card */}
            <div className="group flex p-8 items-center gap-2 rounded-xl bg-[#0F0F0F] flex-1 max-w-[304px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(117,39,170,0.35)] border border-transparent hover:border-[#FFAE47]/40">
              <div className="flex flex-col justify-center items-start gap-[94px] w-full">
                {/* Complex Jury Selection Interface */}
                <div className="flex items-end gap-[3px] shadow-[0_1px_23px_0_rgba(0,0,0,0.43)] w-full">
                  <div className="flex flex-col items-start gap-[3px] w-[67px]">
                    <div className="flex p-1 justify-center items-center gap-[3px] rounded border border-[rgba(182,225,252,0.06)] bg-[#111213] w-full">
                      <span className="text-white font-['Outfit'] text-[7px] font-medium leading-[10px]">Start Voir Dire</span>
                    </div>
                    <div className="flex p-1 flex-col items-start gap-[3px] rounded border border-[rgba(182,225,252,0.06)] bg-[#111213] w-full">
                      <div className="flex flex-col items-start gap-1 w-full">
                        <div className="flex items-center gap-[6px]">
                          <div className="w-[8px] h-[7px] rounded border border-[rgba(182,225,252,0.06)] bg-[#181A1B]"></div>
                          <span className="text-white font-['Outfit'] text-[6px] font-medium">Age</span>
                        </div>
                        <div className="flex items-center gap-[6px]">
                          <div className="w-[8px] h-[7px] rounded border border-[rgba(182,225,252,0.06)] bg-[#181A1B]"></div>
                          <span className="text-white font-['Outfit'] text-[6px] font-medium">Gender</span>
                        </div>
                        <div className="flex items-center gap-[6px] w-full">
                          <div className="w-[8px] h-[7px] rounded border border-[rgba(182,225,252,0.06)] bg-[#181A1B]"></div>
                          <span className="text-white font-['Outfit'] text-[6px] font-medium">Occupation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[3px] w-[79px]">
                    <div className="flex p-1 flex-col items-start gap-[3px] rounded border border-[rgba(182,225,252,0.06)] bg-[#111213] w-full">
                      <div className="flex items-center gap-1">
                        <div className="w-[7px] h-[6px] rounded border border-[rgba(182,225,252,0.06)] bg-[#181A1B]"></div>
                        <span className="text-white font-['Outfit'] text-[6px] font-medium">Sort by Favorability</span>
                        <div className="w-[3px] h-[3px] rounded-full bg-[#3EF6EB]"></div>
                      </div>
                    </div>
                    <div className="flex p-1 flex-col items-start gap-[3px] rounded border border-[rgba(182,225,252,0.06)] bg-[#111213] w-full">
                      <div className="flex flex-col items-start gap-1">
                        <span className="text-white font-['Outfit'] text-[6px] font-medium">Filter</span>
                        <div className="flex items-center gap-[6px]">
                          <div className="w-[8px] h-[7px] rounded border border-[rgba(182,225,252,0.06)] bg-[#181A1B]"></div>
                          <span className="text-white font-['Outfit'] text-[6px] font-medium">Occupation</span>
                        </div>
                        <div className="flex items-center gap-[6px]">
                          <div className="w-[8px] h-[7px] rounded border border-[rgba(182,225,252,0.06)] bg-[#181A1B]"></div>
                          <span className="text-white font-['Outfit'] text-[6px] font-medium">Education Level</span>
                        </div>
                        <div className="flex items-center gap-[6px] w-full">
                          <div className="w-[8px] h-[7px] rounded border border-[rgba(182,225,252,0.06)] bg-[#181A1B]"></div>
                          <span className="text-white font-['Outfit'] text-[6px] font-medium">Jury Experience</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-[3px] w-[83px]">
                    <div className="flex p-1 justify-center items-center gap-[3px] rounded border border-[rgba(182,225,252,0.06)] bg-[#111213]">
                      <span className="text-white font-['Outfit'] text-[7px] font-medium">Upload Jury Pool Data</span>
                    </div>
                    <div className="flex flex-col items-start gap-[3px] w-full">
                      <div className="flex p-2 flex-col justify-center items-center rounded border border-[rgba(182,225,252,0.06)] bg-[#111213] w-full">
                        <div className="flex flex-col items-center gap-[11px] w-[66px]">
                          <svg className="w-[31px] h-[32px]" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_jury)">
                              <path d="M13.832 16.8117C13.932 16.3115 13.6094 15.9061 13.1114 15.9061H8.02595C7.52798 15.9061 7.04317 16.3115 6.94315 16.8117L4.7705 27.6749H11.6594L13.832 16.8117Z" fill="#181A1B"/>
                              <path d="M30.6761 29.4864H2.60369L8.24261 1.29179C8.34263 0.791653 8.02002 0.386183 7.52205 0.386183C7.02408 0.386183 6.53927 0.791653 6.43924 1.29179L0.619203 30.392C0.519176 30.8921 0.841796 31.2976 1.33977 31.2976H30.3139C30.8118 31.2976 31.2967 30.8921 31.3967 30.392C31.4967 29.8918 31.1741 29.4864 30.6761 29.4864Z" fill="#181A1B"/>
                              <path d="M25.238 3.2316C25.338 2.73146 25.0154 2.32599 24.5175 2.32599H19.432C18.934 2.32599 18.4492 2.73146 18.3492 3.2316L13.4605 27.675H20.3493L25.238 3.2316ZM32.5722 10.0217C32.6723 9.52152 32.3496 9.11605 31.8517 9.11605H26.7662C26.2682 9.11605 25.7834 9.52152 25.6834 10.0217L22.1527 27.675H29.0416L32.5722 10.0217Z" fill="#181A1B"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_jury">
                                <rect width="30.7775" height="31.5236" fill="white" transform="matrix(1 0 -0.196116 0.980581 6.62036 0.385867)"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <p className="text-[#C7C7C7] text-center font-['Outfit'] text-[7px] font-normal leading-[8px]">
                            3 jurors flagged as highly aligned with the defense strategy.
                          </p>
                        </div>
                      </div>
                      <div className="flex p-[7px] flex-col items-start gap-[3px] rounded border border-[rgba(182,225,252,0.06)] bg-[#111213] w-full">
                        <div className="flex items-center gap-[13px] w-full">
                          <div className="flex flex-col items-start gap-[6px] w-[21px]">
                            <div className="flex flex-col items-start gap-[1px] w-full">
                              <span className="text-white font-['Outfit'] text-[6px] font-medium">Here are the top 5 jurors</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 w-full">
                  <h3 className="text-white font-['Outfit'] text-2xl font-medium leading-9">
                    Jury Selection
                  </h3>
                  <p className="text-[#B7B7B7] font-['Outfit'] text-base font-normal leading-6">
                    Data-driven voir dire that saves time and sharpens strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Drive Section */}
      <section
        className="relative z-10 flex flex-col items-center gap-2 py-[120px] px-16"
        style={{
          background: 'linear-gradient(180deg, #171717 3.94%, #121212 19.56%, #0A0A0A 59.78%, #02030A 100%)'
        }}
      >
        <div className="flex flex-col items-center gap-20 w-full max-w-7xl">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-10 max-w-[476px]">
            <div className="flex flex-col items-center gap-4 w-full">
              <h2
                className="text-center font-['Outfit'] text-4xl lg:text-[56px] font-medium leading-[66px] bg-clip-text text-transparent"
                style={{
                  background: 'radial-gradient(156.65% 197.21% at 29.1% 0%, #FFF 0%, #B2B2B3 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                1-Minute Test Drive
              </h2>
              <p className="text-[#B7B7B7] text-center font-['Outfit'] text-lg font-normal leading-[27px] w-full">
                Pick a task run a demo prompt see cited output.
              </p>
            </div>
            <button
              className="flex py-3 px-7 justify-center items-center gap-2 rounded-xl bg-white text-[#202939] font-['Manrope'] text-base font-bold leading-6"
              style={{
                boxShadow: '0 0 180px 0 rgba(153, 23, 255, 0.25), 0 0 0 0 rgba(255, 255, 255, 0.07), 0 -2px 8px 0 rgba(0, 0, 0, 0.20) inset, 0 1px 2px 0 rgba(255, 255, 255, 0.41) inset'
              }}
            >
              Get Started
            </button>
          </div>

          {/* Content Cards */}
          <div className="flex h-[606px] justify-between items-center w-full gap-6">
            {/* Sample Transcript - Large Left Card */}
            <div className="w-[640px] h-[606px] relative">
              <div className="w-[640px] h-[606px] rounded-[24px] bg-[#0D0D0D] absolute left-0 top-0"></div>
              <div className="flex flex-col items-center gap-[34px] absolute left-10 top-[55px] w-[561px] h-[99px]">
                <div className="flex flex-col items-center gap-2 w-[337px]">
                  <h3 className="text-white text-center font-['Outfit'] text-[40px] font-medium leading-[43px] w-full">
                    Sample Transcript
                  </h3>
                  <p className="text-[#B7B7B7] text-center font-['Outfit'] text-base font-normal leading-6 w-full">
                    Ask a legal question get cited answers (CA & Federal) in seconds.
                  </p>
                </div>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/af78e973229a395579f9f1d4202658f35aef91d7?width=1148"
                alt="Dashboard Chat Interface"
                className="w-[574px] h-[409px] rounded-[10px] absolute left-[-21px] top-[195px]"
                style={{ boxShadow: '2px -5px 23px 0 rgba(0, 0, 0, 0.43)' }}
              />
              <div
                className="w-[677px] h-[79px] absolute left-[-37px] top-[527px]"
                style={{
                  background: 'linear-gradient(174deg, #0F0F0F -7.3%, #0E0E0E 76.88%)',
                  filter: 'blur(32px)'
                }}
              ></div>
            </div>

            {/* Right Column - Two Smaller Cards */}
            <div className="flex flex-col items-start gap-6 w-[640px]">
              {/* Document Analysis Card */}
              <div className="h-[291px] w-full relative">
                <div className="w-[640px] h-[291px] rounded-2xl bg-[#0D0D0D] absolute left-0 top-0"></div>
                <div className="flex flex-col justify-center items-start gap-[34px] absolute left-6 top-[63px] w-[245px] h-[166px]">
                  <div className="flex flex-col justify-center items-start gap-2 w-[337px]">
                    <h3 className="text-white font-['Outfit'] text-[40px] font-medium leading-[43px] w-[211px]">
                      Document Analysis
                    </h3>
                    <p className="text-[#B7B7B7] font-['Outfit'] text-base font-normal leading-6 w-[257px]">
                      Upload a police report/contract/transcript see a sourced issue map and summary.
                    </p>
                  </div>
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6f2c67ef22d4e0c675dc502f0627822fc12961d7?width=696"
                  alt="Document Analysis Dashboard"
                  className="w-[348px] h-[248px] rounded-[10px] absolute left-[254px] top-[39px]"
                  style={{ boxShadow: '0 1px 23px 0 rgba(0, 0, 0, 0.43)' }}
                />
                <div
                  className="w-[405px] h-[87px] absolute left-[235px] top-[211px]"
                  style={{
                    background: 'linear-gradient(180deg, #0F0F0F -14%, #0E0E0E 104.82%)',
                    filter: 'blur(32px)'
                  }}
                ></div>
              </div>

              {/* Trial Prep Card */}
              <div className="h-[291px] w-full relative">
                <div className="w-[640px] h-[291px] rounded-2xl bg-[#0D0D0D] absolute left-0 top-0"></div>
                <div className="flex flex-col justify-center items-start gap-[34px] absolute left-6 top-[84px] w-[245px] h-[123px]">
                  <div className="flex flex-col justify-center items-start gap-2 w-[337px]">
                    <h3 className="text-white font-['Outfit'] text-[40px] font-medium leading-[43px] w-[211px]">
                      Trial Prep
                    </h3>
                    <p className="text-[#B7B7B7] font-['Outfit'] text-base font-normal leading-6 w-[257px]">
                      Voir dire, juror profile cards, and evidence linked cross exam ready in minutes.
                    </p>
                  </div>
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/25bac7a0b6e5998a0a6b5fc7756f83041f779cfc?width=696"
                  alt="Trial Prep Dashboard"
                  className="w-[348px] h-[248px] rounded-[10px] absolute left-[254px] top-[39px]"
                  style={{ boxShadow: '0 -1px 23px 0 rgba(0, 0, 0, 0.43)' }}
                />
                <div
                  className="w-[411px] h-[102px] absolute left-[229px] top-[198px]"
                  style={{
                    background: 'linear-gradient(180deg, #0F0F0F 17.15%, #0E0E0E 227.51%)',
                    filter: 'blur(32px)'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="relative z-10 flex flex-col items-start gap-2 py-[120px] px-16 bg-black">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-[49px] w-[485px]">
            {/* Header */}
            <div className="flex flex-col items-start gap-4 w-full">
              <h2
                className="font-['Outfit'] text-4xl lg:text-[56px] font-medium leading-[66px] bg-clip-text text-transparent w-full"
                style={{
                  background: 'radial-gradient(156.65% 197.21% at 29.1% 0%, #FFF 0%, #B2B2B3 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                The right tools for your role
              </h2>
              <p className="text-[#B7B7B7] font-['Outfit'] text-lg font-normal leading-[27px] w-[464px]">
                From first facts to filed drafts—faster for your practice area, with cited answers and role-based templates.
              </p>
            </div>

            {/* Content with Vertical Line */}
            <div className="flex items-center gap-[17px]">
              {/* Vertical Line with Star */}
              <div className="flex items-center gap-[22px]">
                <div className="w-[13px] h-[401px] relative">
                  {/* Background Line */}
                  <div
                    className="w-[401px] h-[2px] absolute left-[5px] top-0"
                    style={{
                      transform: 'rotate(90deg)',
                      background: '#545454'
                    }}
                  ></div>
                  {/* Highlighted Section */}
                  <div className="w-[13px] h-[126px] absolute left-0 top-0">
                    <div
                      className="w-[120px] h-[3px] absolute left-[5px] top-0"
                      style={{
                        transform: 'rotate(90deg)',
                        background: 'radial-gradient(93.64% 102.08% at 50% 75%, #FFAE47 0%, #C7497D 78.75%, #7527AA 100%)'
                      }}
                    ></div>
                    {/* Star Icon */}
                    <svg
                      className="absolute left-0 top-[113px] w-[13px] h-[13px]"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 0.650879L8.25559 5.39529L13 7.15088L8.25559 8.90647L6.5 13.6509L4.74441 8.90647L0 7.15088L4.74441 5.39529L6.5 0.650879Z"
                        fill="url(#paint0_radial_star)"
                      />
                      <defs>
                        <radialGradient
                          id="paint0_radial_star"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(6.5 10.4009) rotate(90) scale(13.2708 12.1737)"
                        >
                          <stop stopColor="#FFAE47"/>
                          <stop offset="0.787463" stopColor="#C7497D"/>
                          <stop offset="1" stopColor="#7527AA"/>
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Feature List */}
              <div className="flex flex-col items-start gap-[52px] w-[337px]">
                {/* Criminal Defense (Active) */}
                <div className="flex flex-col items-start gap-2 w-full">
                  <h3 className="text-white font-['Outfit'] text-[32px] font-medium leading-[38px] w-full">
                    Criminal Defense (CA)
                  </h3>
                  <p className="text-[#ADADAD] font-['Outfit'] text-lg font-normal leading-[27px] w-[337px]">
                    Turn reports & body-cam into suppression arguments, quickly.
                  </p>
                </div>

                {/* Civil Litigation Toolkit (Inactive) */}
                <div className="flex flex-col items-start gap-2 w-full">
                  <h3 className="text-[#575757] font-['Outfit'] text-[32px] font-medium leading-[38px] w-full">
                    Civil Litigation Toolkit
                  </h3>
                  <p className="text-[#525252] font-['Outfit'] text-lg font-normal leading-[27px] w-[337px]">
                    Surface contradictions, tag exhibits, and assemble arguments fast.
                  </p>
                </div>

                {/* Built for Students (Inactive) */}
                <div className="flex flex-col items-start gap-2 w-[327px]">
                  <h3 className="text-[#575757] font-['Outfit'] text-[32px] font-medium leading-[38px] w-full">
                    Built for Students
                  </h3>
                  <p className="text-[#525252] font-['Outfit'] text-lg font-normal leading-[27px] w-full">
                    Outlines, case briefs, and issue-spotting fast, with citations you can verify.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - iPhone Mockup */}
          <div className="w-[702px] h-[650px] relative rounded-[24px] border border-transparent overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/fd227593e1659382b8a2a117d96d4a74d6353711?width=1404')`,
                background: `url('https://api.builder.io/api/v1/image/assets/TEMP/fd227593e1659382b8a2a117d96d4a74d6353711?width=1404') lightgray 50% / cover no-repeat, linear-gradient(153deg, rgba(82, 82, 82, 0.35) 1.82%, rgba(13, 13, 13, 0.76) 16.41%, rgba(13, 13, 13, 0.76) 29.23%)`
              }}
            ></div>

            {/* iPhone */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/1810c0da8a07f21488be715d32d0bdb5cbb602f3?width=976"
              alt="iPhone with legal app interface"
              className="w-[488px] h-[669px] absolute left-[126px] top-[66px]"
            />

            {/* Dark Overlay */}
            <div className="w-[702px] h-[650px] bg-black/24 absolute left-0 top-0"></div>

            {/* Floating UI Elements */}
            {/* Police Report */}
            <div className="inline-flex h-12 py-4 px-5 pr-4 justify-center items-center gap-1 rounded-full border border-[#FFAE47] bg-[rgba(18,18,18,0.53)] absolute left-[430px] top-[269px] w-[191px]"
                 style={{
                   boxShadow: '0 0 6px 0 rgba(255, 255, 255, 0.10) inset, 0 0 20px 0 rgba(255, 255, 255, 0.04)',
                   backdropFilter: 'blur(30px)'
                 }}>
              <div className="flex w-10 h-10 p-4 justify-center items-center gap-1 rounded-full bg-[#1F1F1F]">
                <svg className="w-6 h-6" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_search)">
                    <path d="M2.84778 17.2708C-0.949141 13.4738 -0.949062 7.29562 2.84778 3.49863C6.64478 -0.29837 12.8229 -0.29837 16.6198 3.49863C19.8411 6.71986 20.3289 11.5107 18.0847 15.2518C18.0847 15.2518 17.9235 15.5222 18.1412 15.7398L23.1097 20.7082C24.0986 21.6971 24.3341 23.0799 23.4571 23.957L23.3061 24.1078C22.4291 24.985 21.0462 24.7496 20.0574 23.7607L15.0994 18.8027C14.8712 18.5745 14.6008 18.7357 14.6008 18.7357C10.8598 20.9798 6.06902 20.4921 2.84778 17.2708ZM14.822 15.4729C17.6276 12.6673 17.6275 8.10232 14.8219 5.29673C12.0163 2.49122 7.45133 2.49114 4.64581 5.29673C1.84022 8.10225 1.84022 12.6673 4.64581 15.4729C7.4514 18.2783 12.0163 18.2783 14.822 15.4729Z" fill="url(#paint0_linear_search)"/>
                    <path d="M14.1982 9.80691C14.3288 9.80691 14.4615 9.78124 14.5895 9.7272C15.1006 9.51087 15.3397 8.92112 15.1234 8.40991C13.7638 5.19679 10.0436 3.68893 6.83057 5.04858C6.31944 5.26491 6.08031 5.85466 6.29664 6.36587C6.51304 6.87707 7.10264 7.11605 7.614 6.8998C9.80618 5.97218 12.3446 7.00101 13.2721 9.19319C13.4344 9.57659 13.8066 9.80691 14.1982 9.80691Z" fill="url(#paint1_linear_search)"/>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_search" x1="12.0001" y1="0.650879" x2="12.0001" y2="24.6509" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D0D0D0"/>
                      <stop offset="0.5" stopColor="#898787"/>
                      <stop offset="1" stopColor="#D5D5D5"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_search" x1="10.71" y1="4.54834" x2="10.71" y2="9.80691" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D0D0D0"/>
                      <stop offset="0.5" stopColor="#898787"/>
                      <stop offset="1" stopColor="#D5D5D5"/>
                    </linearGradient>
                    <clipPath id="clip0_search">
                      <rect width="24" height="24" fill="white" transform="translate(0 0.650879)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-[#ABABAB] font-['Manrope'] text-xl font-medium leading-6">Police Report</span>
            </div>

            {/* Suppression */}
            <div className="inline-flex h-12 py-4 px-5 pr-4 justify-center items-center gap-1 rounded-full border border-[#FFAE47] bg-[rgba(18,18,18,0.53)] absolute left-[433px] top-[438px] w-[185px]"
                 style={{
                   boxShadow: '0 0 6px 0 rgba(255, 255, 255, 0.10) inset, 0 0 20px 0 rgba(255, 255, 255, 0.04)',
                   backdropFilter: 'blur(30px)'
                 }}>
              <div className="flex w-10 h-10 p-4 justify-center items-center gap-1 rounded-full bg-[#1F1F1F]">
                <svg className="w-6 h-6" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_gavel)">
                    <path d="M0.703125 24.6509H13.4531C13.8415 24.6509 14.1562 24.3361 14.1562 23.9477V23.1977C14.1562 22.421 13.5267 21.7915 12.75 21.7915V20.9508C12.75 19.8377 11.8444 18.9321 10.7313 18.9321H3.42497C2.31187 18.9321 1.40625 19.8377 1.40625 20.9508V21.7915C0.629531 21.7915 0 22.421 0 23.1977V23.9477C0 24.3359 0.314953 24.6509 0.703125 24.6509ZM8.80003 16.1357C9.26737 16.7559 10.1492 16.8799 10.7693 16.4124C11.3897 15.9451 11.5135 15.0633 11.0462 14.4429L6.81469 8.82759C6.3472 8.20724 5.46558 8.08345 4.84537 8.55074C4.22503 9.01823 4.10105 9.89985 4.56853 10.5202L8.80003 16.1357ZM18.9076 8.51891C19.3751 9.13907 20.2568 9.26305 20.8771 8.79557C21.4973 8.32827 21.6213 7.44665 21.1538 6.82626L16.9222 1.21101C16.455 0.590665 15.5731 0.466681 14.9529 0.934165C14.3328 1.40165 14.2088 2.28327 14.6763 2.90367L18.9076 8.51891ZM15.8233 12.604C16.8625 11.8208 17.6428 10.8484 18.1307 9.82443L13.207 3.29052C12.0883 3.47746 10.9385 3.9592 9.89906 4.74252C8.85975 5.52566 8.07952 6.49813 7.59155 7.52188L12.5153 14.0562C13.634 13.8692 14.7838 13.3873 15.8233 12.604ZM17.7218 12.7871C17.3945 13.1207 17.0497 13.4406 16.6695 13.7271C16.2892 14.0136 15.8866 14.2568 15.4759 14.4797L16.3927 15.6965L18.6389 14.004L17.7218 12.7871ZM19.4852 15.127L17.239 16.8194L21.4706 22.4349C21.9381 23.0553 22.8197 23.1791 23.4399 22.7118C24.0602 22.2443 24.184 21.3627 23.7167 20.7423L19.4852 15.127Z" fill="url(#paint0_linear_gavel)"/>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_gavel" x1="12" y1="0.650879" x2="12" y2="24.6509" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D0D0D0"/>
                      <stop offset="0.5" stopColor="#898787"/>
                      <stop offset="1" stopColor="#D5D5D5"/>
                    </linearGradient>
                    <clipPath id="clip0_gavel">
                      <rect width="24" height="24" fill="white" transform="translate(0 0.650879)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-[#ABABAB] font-['Manrope'] text-xl font-medium leading-6">Suppression</span>
            </div>

            {/* Voir Dire */}
            <div className="inline-flex h-12 py-4 px-5 pr-4 justify-center items-center gap-1 rounded-full border border-[#FFAE47] bg-[rgba(18,18,18,0.53)] absolute left-[74px] top-[418px] w-[144px]"
                 style={{
                   boxShadow: '0 0 6px 0 rgba(255, 255, 255, 0.10) inset, 0 0 20px 0 rgba(255, 255, 255, 0.04)',
                   backdropFilter: 'blur(30px)'
                 }}>
              <div className="flex w-10 h-10 p-4 justify-center items-center gap-1 rounded-full bg-[#1F1F1F]">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_edit)">
                    <path d="M7.76527 19.8991L2.77527 14.9091L14.8444 2.83998L19.8344 7.82991L7.76527 19.8991ZM2.3088 15.7881L6.88629 20.3656L0.0234375 22.651L2.3088 15.7881ZM21.3692 6.30183L20.5037 7.16729L15.507 2.17073L16.3726 1.3052C17.2445 0.432772 18.6583 0.432772 19.5302 1.3052L21.3692 3.14424C22.2347 4.01897 22.2347 5.4273 21.3692 6.30183Z" fill="url(#paint0_linear_edit)"/>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_edit" x1="11.0209" y1="0.650879" x2="11.0209" y2="22.651" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D0D0D0"/>
                      <stop offset="0.5" stopColor="#898787"/>
                      <stop offset="1" stopColor="#D5D5D5"/>
                    </linearGradient>
                    <clipPath id="clip0_edit">
                      <rect width="22" height="22" fill="white" transform="translate(0 0.650879)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-[#ABABAB] font-['Manrope'] text-xl font-medium leading-6">Voir Dire</span>
            </div>

            {/* Cross-Exam */}
            <div className="inline-flex h-12 py-4 px-5 pr-4 justify-center items-center gap-1 rounded-full border border-[#FFAE47] bg-[rgba(18,18,18,0.53)] absolute left-[70px] top-[212px] w-[184px]"
                 style={{
                   boxShadow: '0 0 6px 0 rgba(255, 255, 255, 0.10) inset, 0 0 20px 0 rgba(255, 255, 255, 0.04)',
                   backdropFilter: 'blur(30px)'
                 }}>
              <div className="flex w-10 h-10 p-4 justify-center items-center gap-1 rounded-full bg-[#1F1F1F]">
                <svg className="w-6 h-6" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_doc)">
                    <path d="M4.96875 24.6509H19.0312C20.1944 24.6509 21.1406 23.7047 21.1406 22.5415V7.68213H16.2188C15.0556 7.68213 14.1094 6.73591 14.1094 5.57275V0.650879H4.96875C3.80559 0.650879 2.85938 1.5971 2.85938 2.76025V22.5415C2.85938 23.7047 3.80559 24.6509 4.96875 24.6509ZM7.78125 10.5415H16.2188C16.6074 10.5415 16.9219 10.856 16.9219 11.2446C16.9219 11.6333 16.6074 11.9478 16.2188 11.9478H7.78125C7.39261 11.9478 7.07812 11.6333 7.07812 11.2446C7.07812 10.856 7.39261 10.5415 7.78125 10.5415ZM7.78125 13.354H16.2188C16.6074 13.354 16.9219 13.6685 16.9219 14.0571C16.9219 14.4458 16.6074 14.7603 16.2188 14.7603H7.78125C7.39261 14.7603 7.07812 14.4458 7.07812 14.0571C7.07812 13.6685 7.39261 13.354 7.78125 13.354ZM7.78125 16.1665H16.2188C16.6074 16.1665 16.9219 16.481 16.9219 16.8696C16.9219 17.2583 16.6074 17.5728 16.2188 17.5728H7.78125C7.39261 17.5728 7.07812 17.2583 7.07812 16.8696C7.07812 16.481 7.39261 16.1665 7.78125 16.1665ZM7.78125 18.979H13.4062C13.7949 18.979 14.1094 19.2935 14.1094 19.6821C14.1094 20.0708 13.7949 20.3853 13.4062 20.3853H7.78125C7.39261 20.3853 7.07812 20.0708 7.07812 19.6821C7.07812 19.2935 7.39261 18.979 7.78125 18.979Z" fill="url(#paint0_linear_doc)"/>
                    <path d="M16.2188 6.27588H20.7286L15.5156 1.06287V5.57276C15.5156 5.96069 15.8308 6.27588 16.2188 6.27588Z" fill="url(#paint1_linear_doc)"/>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_doc" x1="12" y1="0.650879" x2="12" y2="24.6509" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D0D0D0"/>
                      <stop offset="0.5" stopColor="#898787"/>
                      <stop offset="1" stopColor="#D5D5D5"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_doc" x1="18.1221" y1="1.06287" x2="18.1221" y2="6.27588" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D0D0D0"/>
                      <stop offset="0.5" stopColor="#898787"/>
                      <stop offset="1" stopColor="#D5D5D5"/>
                    </linearGradient>
                    <clipPath id="clip0_doc">
                      <rect width="24" height="24" fill="white" transform="translate(0 0.650879)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-[#ABABAB] font-['Manrope'] text-xl font-medium leading-6">Cross-Exam</span>
            </div>

            {/* Gradient Blur Effects */}
            <svg
              className="w-[767px] h-[300px] absolute left-[-81px] top-[-259px]"
              style={{
                transform: 'rotate(20.261deg)',
                filter: 'blur(49.5px)',
                mixBlendMode: 'color'
              }}
              viewBox="0 0 702 298"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g style={{mixBlendMode: 'color'}} filter="url(#filter0_f_blur1)">
                <path d="M698.042 128.189C673.398 194.948 482.972 231.511 284.237 158.151C85.5014 84.7909 -46.2862 -70.7121 -21.6431 -137.471C2.99992 -204.23 184.084 -198.879 382.819 -125.519C581.555 -52.1591 722.685 61.4299 698.042 128.189ZM66.5902 -104.901C47.9896 -54.5115 154.514 31.2254 304.52 86.5976C454.525 141.97 591.208 146.009 609.808 95.619C628.409 45.2293 521.884 -40.5077 371.878 -95.8798C221.873 -151.252 85.1908 -155.291 66.5902 -104.901Z" fill="url(#paint0_linear_blur1)" fillOpacity="0.61"/>
              </g>
              <defs>
                <filter id="filter0_f_blur1" x="-123.6" y="-283.24" width="923.435" height="580.794" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="49.5" result="effect1_foregroundBlur"/>
                </filter>
                <linearGradient id="paint0_linear_blur1" x1="510.818" y1="-155.184" x2="403.074" y2="136.493" gradientUnits="userSpaceOnUse">
                  <stop offset="0.319409" stopColor="#E29C44"/>
                  <stop offset="0.697079" stopColor="#7527AA" stopOpacity="0.95"/>
                  <stop offset="1" stopColor="#C7497D"/>
                </linearGradient>
              </defs>
            </svg>

            <svg
              className="w-[767px] h-[300px] absolute left-[-73px] top-[212px]"
              style={{
                transform: 'rotate(20.261deg)',
                filter: 'blur(49.5px)',
                mixBlendMode: 'color'
              }}
              viewBox="0 0 702 464"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g style={{mixBlendMode: 'color'}} filter="url(#filter0_f_blur2)">
                <path d="M706.042 412.189C681.398 478.948 490.972 515.511 292.237 442.151C93.5014 368.791 -38.2862 213.288 -13.6431 146.529C10.9999 79.7698 192.084 85.1209 390.819 158.481C589.555 231.841 730.685 345.43 706.042 412.189ZM74.5902 179.099C55.9896 229.488 162.514 315.225 312.52 370.598C462.525 425.97 599.208 430.009 617.808 379.619C636.409 329.229 529.884 243.492 379.878 188.12C229.873 132.748 93.1908 128.709 74.5902 179.099Z" fill="url(#paint0_linear_blur2)" fillOpacity="0.64"/>
              </g>
              <defs>
                <filter id="filter0_f_blur2" x="-115.6" y="0.76001" width="923.435" height="580.794" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="49.5" result="effect1_foregroundBlur"/>
                </filter>
                <linearGradient id="paint0_linear_blur2" x1="518.818" y1="128.816" x2="411.074" y2="420.493" gradientUnits="userSpaceOnUse">
                  <stop offset="0.319409" stopColor="#E29C44"/>
                  <stop offset="0.697079" stopColor="#7527AA" stopOpacity="0.95"/>
                  <stop offset="1" stopColor="#C7497D"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 py-24 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3 bg-clip-text text-transparent"
                style={{
                  background: 'radial-gradient(120% 140% at 50% 0%, #FFFFFF 0%, #B9B9BA 70%, #8F8F91 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>The plan that fits your work</h2>
            <p className="mb-10 text-[15px] leading-6 text-[#CFCFCF]">Find your fit—plans for every legal workflow, from research and drafting to trial prep.</p>
            <div className="flex items-center justify-center gap-3 mb-10">
              <Button variant="ghost" className="bg-white/10 hover:bg-white/20 text-white border border-white/10">Monthly</Button>
              <Button variant="ghost" className="text-[#D6D6D6] hover:text-white hover:bg-white/5">Yearly (Save 20%)</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-[#111214]/80 border border-white/10 p-8 backdrop-blur-xl">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-2 text-white/90">Basic</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">Free</span>
                </div>
                <Button className="w-full mb-6 bg-white text-gray-900 hover:bg-gray-100 shadow-[0_0_40px_rgba(255,255,255,0.07)]">Start for Free</Button>
                <ul className="space-y-3 text-sm text-gray-300/90">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    250 Message Cap
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    4 Document Uploads/mo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Detailed Law Student Outlines
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Case Law Research
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Save Past Chats/Research
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Simple Motion Drafting (Template)
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card
              className="p-8 relative backdrop-blur-xl border-0 shadow-[0_0_80px_rgba(199,73,125,0.35)]"
              style={{background: 'linear-gradient(135deg, rgba(117,39,170,0.95) 0%, rgba(199,73,125,0.95) 100%)'}}
            >
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white shadow-[0_8px_30px_rgba(255,174,71,0.5)]">
                Popular
              </Badge>
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-2 text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">Plus</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">$20</span>
                  <span className="text-gray-200">/Month</span>
                </div>
                <Button className="w-full mb-6 bg-orange-500 hover:bg-orange-600 text-white shadow-[0_12px_40px_rgba(255,174,71,0.45)]">Get Plus</Button>
                <ul className="space-y-3 text-sm text-white/90">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    600 Message Cap
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    12 Document Uploads/mo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Detailed Law Student Outlines (Exportable)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Police Report Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Cross-Examination Builder
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Voir Dire Question Builder
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Jury Profile Creator
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Everything in Basic
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-[#111214]/80 border border-white/10 p-8 backdrop-blur-xl">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-2 text-white/90">Pro</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">$60</span>
                  <span className="text-gray-300">/Month</span>
                </div>
                <Button className="w-full mb-6 bg-orange-500 hover:bg-orange-600 text-white shadow-[0_10px_36px_rgba(255,174,71,0.35)]">Get Pro</Button>
                <ul className="space-y-3 text-sm text-gray-300/90">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    1000 Message Cap
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    20 Document Uploads/mo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Detailed Law Student Outlines (Exportable)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Detailed Motion Drafting (Case-tailored)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Batch Upload/Multi-file Search
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Everything in Plus
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Launch Section */}
      <section className="relative z-10 flex w-full h-[604px] justify-center items-center">
        <div
          className="w-full h-[604px] absolute left-0 top-0"
          style={{
            background: 'linear-gradient(180deg, #1F1F1F -6.59%, #141414 7.55%, rgba(0, 0, 0, 0.00) 52.94%, rgba(2, 3, 10, 0.00) 63.8%)'
          }}
        >
          {/* Corner tint blending from Pricing into Launch */}
          <svg
            className="pointer-events-none absolute left-[720px] top-[-60px] opacity-70"
            width="760" height="260" viewBox="0 0 760 260" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ filter: 'blur(64px)' }}
          >
            <g>
              <circle cx="170" cy="110" r="130" fill="#FFAE47" fillOpacity="0.60"/>
              <circle cx="380" cy="90" r="160" fill="#C7497D" fillOpacity="0.55"/>
              <circle cx="610" cy="120" r="150" fill="#7527AA" fillOpacity="0.35"/>
              <circle cx="540" cy="80" r="70" fill="#E14F6E" fillOpacity="0.45"/>
            </g>
          </svg>
          <div className="inline-flex pr-[21px] items-center absolute left-16 top-[120px] w-[1312px] h-[393px]">
            <div className="flex items-center gap-[206px] absolute left-0 top-0 w-[1291px] h-[393px]">
              {/* Left Content */}
              <div className="flex flex-col items-start gap-16 w-[454px]">
                <div className="flex flex-col items-start gap-10 w-full">
                  {/* Badge */}
                  <div className="flex py-[6px] px-4 justify-center items-center gap-2 rounded-[32px] border border-[#FFAE47]">
                    <span
                      className="font-['Outfit'] text-base font-normal leading-6 bg-clip-text text-transparent"
                      style={{
                        background: 'radial-gradient(40.83% 41.66% at 40.82% 58.33%, #FFF 0%, #666 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      Pick a path
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start gap-4 w-full">
                    <h2
                      className="font-['Outfit'] text-4xl lg:text-[56px] font-medium leading-[66px] bg-clip-text text-transparent w-[453px]"
                      style={{
                        background: 'radial-gradient(50% 50% at 50% 50%, #FFF 0%, #999 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      Launch your first prompt
                    </h2>
                    <p className="text-[#B7B7B7] font-['Outfit'] text-lg font-normal leading-[27px] w-[377px]">
                      Trusted by attorneys & students—join them today and get court-ready faster.
                    </p>
                  </div>
                </div>

                {/* Button */}
                <button
                  className="flex py-3 px-7 justify-center items-center gap-2 rounded-xl bg-white text-[#202939] font-['Outfit'] text-lg font-normal leading-[27px]"
                  style={{
                    boxShadow: '0 0 180px 0 rgba(153, 23, 255, 0.25), 0 0 0 0 rgba(255, 255, 255, 0.07), 0 -2px 8px 0 rgba(0, 0, 0, 0.20) inset, 0 1px 2px 0 rgba(255, 255, 255, 0.41) inset'
                  }}
                >
                  Get Started
                </button>
              </div>

              {/* Right Dashboard Mockup */}
              <div className="flex w-[631.497px] h-[346px] justify-center items-center relative">
                <div
                  className="w-[631px] h-[346px] flex-shrink-0 absolute left-0 top-0"
                  style={{
                    borderRadius: '16px 16px 46.251px 46.251px',
                    background: 'linear-gradient(182deg, rgba(46, 46, 46, 0.60) -1.68%, rgba(46, 46, 46, 0.60) 11.96%, rgba(15, 15, 15, 0.60) 30.25%, rgba(0, 0, 0, 0.60) 98.5%)'
                  }}
                >
                  {/* Dashboard Image */}
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/6317ecaf91ae54b2bfe81760273d9858fe75a441?width=1156"
                    alt="Dashboard Chat Interface"
                    className="flex w-[578px] h-[411px] items-start flex-shrink-0 rounded-[94.12px] absolute left-[26px] top-[33px]"
                    style={{
                      transform: 'rotate(-11.106deg) scale(1.06)',
                      imageRendering: 'crisp-edges',
                      filter: 'brightness(1.06) contrast(1.08) drop-shadow(0px 40px 80px rgba(0,0,0,0.55))'
                    }}
                  />

                  {/* Gradient Effects */}
                  <svg
                    className="w-[611px] h-[369px] absolute left-1 top-[-272px]"
                    viewBox="0 0 632 187"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_f_gradient1)">
                      <circle cx="115.015" cy="-63.9205" r="111.234" fill="#FFAE47"/>
                    </g>
                    <g filter="url(#filter1_f_gradient1)">
                      <circle cx="504.948" cy="-55.1923" r="111.234" transform="rotate(120 504.948 -55.1923)" fill="#C7497D"/>
                    </g>
                    <g filter="url(#filter2_f_gradient1)">
                      <ellipse cx="296.092" cy="-80.4951" rx="71.6988" ry="140.477" transform="rotate(150 296.092 -80.4951)" fill="#7527AA"/>
                    </g>
                    <defs>
                      <filter id="filter0_f_gradient1" x="-49.0788" y="-228.014" width="328.188" height="328.188" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="26.43" result="effect1_foregroundBlur"/>
                      </filter>
                      <filter id="filter1_f_gradient1" x="262.832" y="-297.308" width="484.232" height="484.232" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="65.4317" result="effect1_foregroundBlur"/>
                      </filter>
                      <filter id="filter2_f_gradient1" x="71.4775" y="-338.221" width="449.228" height="515.451" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="65.4317" result="effect1_foregroundBlur"/>
                      </filter>
                    </defs>
                  </svg>

                  {/* Bottom Blur */}
                  <div
                    className="w-[662px] h-[125px] flex-shrink-0 absolute left-[-15px] top-[267px]"
                    style={{
                      background: 'linear-gradient(180deg, #000 8.63%, #080808 65.81%)',
                      filter: 'blur(41.59563064575195px)'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side Gradient Effect */}
        <svg
          className="w-[477px] h-[288px] absolute left-[-381px] top-[471px]"
          style={{
            transform: 'rotate(168.763deg)',
            filter: 'blur(96px)'
          }}
          viewBox="0 0 305 273"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_side)">
            <g filter="url(#filter1_f_side)">
              <circle cx="25.7706" cy="279.065" r="86.8122" transform="rotate(168.763 25.7706 279.065)" fill="#FFAE47"/>
            </g>
            <g filter="url(#filter2_f_side)">
              <ellipse cx="-105.113" cy="345.519" rx="55.9572" ry="109.635" transform="rotate(-41.2374 -105.113 345.519)" fill="#7527AA"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_f_side" x="-573" y="-52.8491" width="907.605" height="759.359" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="96" result="effect1_foregroundBlur"/>
            </filter>
            <filter id="filter1_f_side" x="-163.19" y="90.1044" width="377.921" height="377.922" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="51.066" result="effect1_foregroundBlur"/>
            </filter>
            <filter id="filter2_f_side" x="-290.885" y="153.045" width="371.546" height="384.947" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="51.066" result="effect1_foregroundBlur"/>
            </filter>
          </defs>
        </svg>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 flex flex-col items-start gap-2 py-[120px] px-16 bg-black">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-[307px] w-[564px]">
            {/* Header */}
            <div className="flex flex-col items-start gap-4 w-full">
              <h2
                className="font-['Outfit'] text-4xl lg:text-[56px] font-medium leading-[66px] bg-clip-text text-transparent w-full"
                style={{
                  background: 'radial-gradient(156.65% 197.21% at 29.1% 0%, #FFFFFF 0%, #BFC0C2 65%, #9C9EA1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Got questions? We've got answers
              </h2>
              <p className="text-[#D0D0D0] font-['Outfit'] text-[15px] font-normal leading-6 w-[564px]">
                Your top questions about research, drafting, and trial prep answered.
              </p>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              {/* Gavel Icon */}
              <div className="w-[83px] h-[68px] rounded-lg border border-[#FFAE47] bg-[#0D0D0D] relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/48b0185e8d0146caff3f2e7b2b83714d303896ec?width=132"
                  alt="Judicial Gavel"
                  className="w-[66px] h-[35px] absolute left-[9px] top-4"
                  style={{ mixBlendMode: 'plus-lighter' }}
                />
                <svg
                  className="w-[96px] h-[58px] absolute left-0 top-[7px]"
                  style={{ mixBlendMode: 'color-burn' }}
                  viewBox="0 0 83 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g style={{mixBlendMode: 'color-burn'}}>
                    <g filter="url(#filter0_f_icon1)">
                      <circle cx="17.4856" cy="39.9002" r="17.4856" fill="#FFAE47"/>
                    </g>
                    <g filter="url(#filter1_f_icon1)">
                      <circle cx="72.1142" cy="41.2737" r="17.4856" transform="rotate(120 72.1142 41.2737)" fill="#C7497D"/>
                    </g>
                    <g filter="url(#filter2_f_icon1)">
                      <ellipse cx="45.9518" cy="31.9102" rx="11.2708" ry="22.0826" transform="rotate(150 45.9518 31.9102)" fill="#7527AA"/>
                    </g>
                  </g>
                  <defs>
                    <filter id="filter0_f_icon1" x="-20.5713" y="1.84325" width="76.1138" height="76.1138" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="10.2856" result="effect1_foregroundBlur"/>
                    </filter>
                    <filter id="filter1_f_icon1" x="34.0544" y="3.21386" width="76.1196" height="76.1196" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="10.2856" result="effect1_foregroundBlur"/>
                    </filter>
                    <filter id="filter2_f_icon1" x="10.6431" y="-8.60352" width="70.6174" height="81.0274" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="10.2856" result="effect1_foregroundBlur"/>
                    </filter>
                  </defs>
                </svg>
              </div>

              {/* Landmark Icon */}
              <div className="w-[83px] h-[68px] rounded-lg border border-[#FFAE47] bg-[#0D0D0D] relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1f4de00fe108093f1e2e4d9a9fee5e662543aa45?width=78"
                  alt="City Landmark"
                  className="w-[39px] h-[48px] absolute left-[22px] top-2"
                />
                <svg
                  className="w-[96px] h-[58px] absolute left-0 top-[7px]"
                  style={{ mixBlendMode: 'color-burn' }}
                  viewBox="0 0 83 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g style={{mixBlendMode: 'color-burn'}}>
                    <g filter="url(#filter0_f_icon2)">
                      <circle cx="17.4856" cy="39.9002" r="17.4856" fill="#FFAE47"/>
                    </g>
                    <g filter="url(#filter1_f_icon2)">
                      <circle cx="72.1142" cy="41.2737" r="17.4856" transform="rotate(120 72.1142 41.2737)" fill="#C7497D"/>
                    </g>
                    <g filter="url(#filter2_f_icon2)">
                      <ellipse cx="45.9518" cy="31.9102" rx="11.2708" ry="22.0826" transform="rotate(150 45.9518 31.9102)" fill="#7527AA"/>
                    </g>
                  </g>
                  <defs>
                    <filter id="filter0_f_icon2" x="-20.5713" y="1.84325" width="76.1138" height="76.1138" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="10.2856" result="effect1_foregroundBlur"/>
                    </filter>
                    <filter id="filter1_f_icon2" x="34.0544" y="3.21386" width="76.1196" height="76.1196" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="10.2856" result="effect1_foregroundBlur"/>
                    </filter>
                    <filter id="filter2_f_icon2" x="10.6431" y="-8.60352" width="70.6174" height="81.0274" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="10.2856" result="effect1_foregroundBlur"/>
                    </filter>
                  </defs>
                </svg>
              </div>

              {/* Scales Icon */}
              <div className="w-[83px] h-[68px] rounded-lg border border-[#FFAE47] bg-[#0D0D0D] relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d648527554b1f214ff9bfa8559f937ef86aedf99?width=100"
                  alt="Scales of Justice"
                  className="w-[50px] h-[44px] absolute left-[17px] top-3"
                />
                <svg
                  className="w-[96px] h-[58px] absolute left-0 top-[7px]"
                  style={{ mixBlendMode: 'color-burn' }}
                  viewBox="0 0 83 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g style={{mixBlendMode: 'color-burn'}}>
                    <g filter="url(#filter0_f_icon3)">
                      <circle cx="17.4856" cy="39.9002" r="17.4856" fill="#FFAE47"/>
                    </g>
                    <g filter="url(#filter1_f_icon3)">
                      <circle cx="72.1142" cy="41.2737" r="17.4856" transform="rotate(120 72.1142 41.2737)" fill="#C7497D"/>
                    </g>
                    <g filter="url(#filter2_f_icon3)">
                      <ellipse cx="45.9518" cy="31.9102" rx="11.2708" ry="22.0826" transform="rotate(150 45.9518 31.9102)" fill="#7527AA"/>
                    </g>
                  </g>
                  <defs>
                    <filter id="filter0_f_icon3" x="-20.5713" y="1.84325" width="76.1138" height="76.1138" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="10.2856" result="effect1_foregroundBlur"/>
                    </filter>
                    <filter id="filter1_f_icon3" x="34.0544" y="3.21386" width="76.1196" height="76.1196" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="10.2856" result="effect1_foregroundBlur"/>
                    </filter>
                    <filter id="filter2_f_icon3" x="10.6431" y="-8.60352" width="70.6174" height="81.0274" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="10.2856" result="effect1_foregroundBlur"/>
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Right FAQ Items */}
          <div className="flex flex-col items-start gap-[17px] w-[614px]">
            {/* FAQ Item 1 - Expanded */}
            <div className="flex py-[14px] px-4 flex-col items-start gap-2 w-full rounded-xl bg-[#0D0D0D] border border-white/5">
              <div className="flex flex-col items-start gap-6">
                <div className="flex items-center gap-[169px]">
                  <span className="text-white font-['Outfit'] text-xl font-medium leading-[30px]">
                    Will my data be used to train any AI models?
                  </span>
                  <div className="flex w-6 h-6 p-1 justify-center items-center gap-2 rounded-2xl border border-black bg-[#0D0D0D]">
                    <svg className="w-4 h-4" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.64597 10.2968L7.64597 5.29685C7.69241 5.25036 7.74755 5.21348 7.80825 5.18832C7.86895 5.16316 7.93401 5.15021 7.99972 5.15021C8.06543 5.15021 8.13049 5.16316 8.19119 5.18832C8.25189 5.21348 8.30704 5.25036 8.35347 5.29685L13.3535 10.2969C13.4473 10.3907 13.5 10.5179 13.5 10.6506C13.5 10.7833 13.4473 10.9105 13.3535 11.0044C13.2597 11.0982 13.1324 11.1509 12.9997 11.1509C12.867 11.1509 12.7398 11.0982 12.646 11.0044L7.99972 6.35748L3.35347 11.0044C3.30702 11.0508 3.25187 11.0877 3.19117 11.1128C3.13047 11.1379 3.06542 11.1509 2.99972 11.1509C2.93402 11.1509 2.86897 11.1379 2.80827 11.1128C2.74758 11.0877 2.69243 11.0508 2.64597 11.0044C2.59952 10.9579 2.56267 10.9027 2.53753 10.842C2.51238 10.7814 2.49944 10.7163 2.49944 10.6506C2.49944 10.5849 2.51238 10.5198 2.53753 10.4592C2.56267 10.3985 2.59952 10.3433 2.64597 10.2968Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 w-[564px]">
                  <div className="h-px w-full rounded-xl bg-white/10"></div>
                  <p className="text-[#CFCFCF] font-['Outfit'] text-[15px] font-normal leading-6 w-full">
                    Any AI vendors we use are contractually barred from training on your data. Uploaded files auto-delete after 30 days (you can delete sooner), and everything is encrypted in transit and at rest. We may review de-identified usage telemetry (like feature errors or load times) to improve reliability—never your readable client content.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 2 - Collapsed */}
            <div className="flex py-[18px] px-4 flex-col items-start gap-2 w-full rounded-xl bg-[#0D0D0D] border border-white/5">
              <div className="flex flex-col items-start gap-6">
                <div className="flex items-center gap-[257px]">
                  <span className="text-[#BEBEBE] font-['Outfit'] text-xl font-normal leading-[30px]">
                    Do you cite real cases I can verify?
                  </span>
                  <div className="flex w-6 h-6 p-1 justify-center items-center gap-2 rounded-2xl border border-black bg-[#0D0D0D]">
                    <svg className="w-4 h-4" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.354 7.00491L8.35403 12.0049C8.30759 12.0514 8.25245 12.0883 8.19175 12.1134C8.13105 12.1386 8.06599 12.1515 8.00028 12.1515C7.93457 12.1515 7.86951 12.1386 7.80881 12.1134C7.74811 12.0883 7.69296 12.0514 7.64653 12.0049L2.64653 7.00491C2.55271 6.91109 2.5 6.78384 2.5 6.65116C2.5 6.51847 2.55271 6.39123 2.64653 6.29741C2.74035 6.20359 2.8676 6.15088 3.00028 6.15088C3.13296 6.15088 3.26021 6.20359 3.35403 6.29741L8.00028 10.9443L12.6465 6.29741C12.693 6.25095 12.7481 6.2141 12.8088 6.18896C12.8695 6.16382 12.9346 6.15088 13.0003 6.15088C13.066 6.15088 13.131 6.16382 13.1917 6.18896C13.2524 6.2141 13.3076 6.25095 13.354 6.29741C13.4005 6.34386 13.4373 6.39901 13.4625 6.45971C13.4876 6.52041 13.5006 6.58546 13.5006 6.65116C13.5006 6.71685 13.4876 6.78191 13.4625 6.84261C13.4373 6.9033 13.4005 6.95845 13.354 7.00491Z" fill="white"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 - Collapsed */}
            <div className="flex py-[18px] px-4 flex-col items-start gap-2 w-full rounded-xl bg-[#0D0D0D] border border-white/5">
              <div className="flex flex-col items-start gap-6">
                <div className="flex items-center gap-[139px]">
                  <span className="text-[#BEBEBE] font-['Outfit'] text-xl font-normal leading-[30px]">
                    How many documents can I upload on my plan?
                  </span>
                  <div className="flex w-6 h-6 p-1 justify-center items-center gap-2 rounded-2xl border border-black bg-[#0D0D0D]">
                    <svg className="w-4 h-4" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.354 7.00491L8.35403 12.0049C8.30759 12.0514 8.25245 12.0883 8.19175 12.1134C8.13105 12.1386 8.06599 12.1515 8.00028 12.1515C7.93457 12.1515 7.86951 12.1386 7.80881 12.1134C7.74811 12.0883 7.69296 12.0514 7.64653 12.0049L2.64653 7.00491C2.55271 6.91109 2.5 6.78384 2.5 6.65116C2.5 6.51847 2.55271 6.39123 2.64653 6.29741C2.74035 6.20359 2.8676 6.15088 3.00028 6.15088C3.13296 6.15088 3.26021 6.20359 3.35403 6.29741L8.00028 10.9443L12.6465 6.29741C12.693 6.25095 12.7481 6.2141 12.8088 6.18896C12.8695 6.16382 12.9346 6.15088 13.0003 6.15088C13.066 6.15088 13.131 6.16382 13.1917 6.18896C13.2524 6.2141 13.3076 6.25095 13.354 6.29741C13.4005 6.34386 13.4373 6.39901 13.4625 6.45971C13.4876 6.52041 13.5006 6.58546 13.5006 6.65116C13.5006 6.71685 13.4876 6.78191 13.4625 6.84261C13.4373 6.9033 13.4005 6.95845 13.354 7.00491Z" fill="white"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 - Collapsed */}
            <div className="flex py-[18px] px-4 flex-col items-start gap-2 w-full rounded-xl bg-[#0D0D0D] border border-white/5">
              <div className="flex flex-col items-start gap-6">
                <div className="flex items-center gap-[132px]">
                  <span className="text-[#BEBEBE] font-['Outfit'] text-xl font-normal leading-[30px]">
                    Is this legal advice, or do I need attorney review?
                  </span>
                  <div className="flex w-6 h-6 p-1 justify-center items-center gap-2 rounded-2xl border border-black bg-[#0D0D0D]">
                    <svg className="w-4 h-4" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.354 7.00491L8.35403 12.0049C8.30759 12.0514 8.25245 12.0883 8.19175 12.1134C8.13105 12.1386 8.06599 12.1515 8.00028 12.1515C7.93457 12.1515 7.86951 12.1386 7.80881 12.1134C7.74811 12.0883 7.69296 12.0514 7.64653 12.0049L2.64653 7.00491C2.55271 6.91109 2.5 6.78384 2.5 6.65116C2.5 6.51847 2.55271 6.39123 2.64653 6.29741C2.74035 6.20359 2.8676 6.15088 3.00028 6.15088C3.13296 6.15088 3.26021 6.20359 3.35403 6.29741L8.00028 10.9443L12.6465 6.29741C12.693 6.25095 12.7481 6.2141 12.8088 6.18896C12.8695 6.16382 12.9346 6.15088 13.0003 6.15088C13.066 6.15088 13.131 6.16382 13.1917 6.18896C13.2524 6.2141 13.3076 6.25095 13.354 6.29741C13.4005 6.34386 13.4373 6.39901 13.4625 6.45971C13.4876 6.52041 13.5006 6.58546 13.5006 6.65116C13.5006 6.71685 13.4876 6.78191 13.4625 6.84261C13.4373 6.9033 13.4005 6.95845 13.354 7.00491Z" fill="white"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 5 - Collapsed */}
            <div className="flex py-[18px] px-4 flex-col items-start gap-2 w-full rounded-xl bg-[#0D0D0D] border border-white/5">
              <div className="flex flex-col items-start gap-6">
                <div className="flex items-center gap-[236px]">
                  <span className="text-[#BEBEBE] font-['Outfit'] text-xl font-normal leading-[30px]">
                    Build a motion outline with citations?
                  </span>
                  <div className="flex w-6 h-6 p-1 justify-center items-center gap-2 rounded-2xl border border-black bg-[#0D0D0D]">
                    <svg className="w-4 h-4" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.354 7.00491L8.35403 12.0049C8.30759 12.0514 8.25245 12.0883 8.19175 12.1134C8.13105 12.1386 8.06599 12.1515 8.00028 12.1515C7.93457 12.1515 7.86951 12.1386 7.80881 12.1134C7.74811 12.0883 7.69296 12.0514 7.64653 12.0049L2.64653 7.00491C2.55271 6.91109 2.5 6.78384 2.5 6.65116C2.5 6.51847 2.55271 6.39123 2.64653 6.29741C2.74035 6.20359 2.8676 6.15088 3.00028 6.15088C3.13296 6.15088 3.26021 6.20359 3.35403 6.29741L8.00028 10.9443L12.6465 6.29741C12.693 6.25095 12.7481 6.2141 12.8088 6.18896C12.8695 6.16382 12.9346 6.15088 13.0003 6.15088C13.066 6.15088 13.131 6.16382 13.1917 6.18896C13.2524 6.2141 13.3076 6.25095 13.354 6.29741C13.4005 6.34386 13.4373 6.39901 13.4625 6.45971C13.4876 6.52041 13.5006 6.58546 13.5006 6.65116C13.5006 6.71685 13.4876 6.78191 13.4625 6.84261C13.4373 6.9033 13.4005 6.95845 13.354 7.00491Z" fill="white"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      {/* Footer */}
      <footer
        className="relative z-10 border-t border-gray-700/50 backdrop-blur-md overflow-hidden"
        style={{background: 'linear-gradient(135deg, rgba(0,0,0,0.86) 0%, rgba(117,39,170,0.22) 100%)'}}
      >
        {/* Subtle background lights for footer */}
        <svg
          className="pointer-events-none absolute -left-40 -top-24 opacity-40"
          width="560" height="320" viewBox="0 0 560 320" fill="none" xmlns="http://www.w3.org/2000/svg"
          style={{filter: 'blur(72px)'}}
        >
          <g>
            <circle cx="140" cy="80" r="120" fill="#7527AA" fillOpacity="0.55"/>
            <circle cx="360" cy="60" r="140" fill="#C7497D" fillOpacity="0.35"/>
            <circle cx="520" cy="180" r="110" fill="#FFAE47" fillOpacity="0.22"/>
          </g>
        </svg>
        <svg
          className="pointer-events-none absolute -right-56 bottom-0 opacity-35"
          width="620" height="360" viewBox="0 0 620 360" fill="none" xmlns="http://www.w3.org/2000/svg"
          style={{filter: 'blur(84px)'}}
        >
          <g>
            <circle cx="80" cy="260" r="140" fill="#7527AA" fillOpacity="0.5"/>
            <circle cx="260" cy="220" r="120" fill="#C7497D" fillOpacity="0.35"/>
          </g>
        </svg>

        <div className="w-full">
          <div className="max-w-7xl mx-auto px-16 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/07ee4757770b3900750f7393af76a4e06665a333?width=118"
                  alt="BearisterAI Logo"
                  className="w-8 h-8"
                />
                <span className="text-lg font-semibold text-white">Bearister.ai</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Obie by BearisterAI is an AI co-counsel for attorneys and law students—research, drafting, and trial prep in one workspace.
              </p>
              <Button className="bg-white text-gray-900 hover:bg-gray-100">Get Started</Button>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Workflow</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>support@bearister.ai</li>
                <li>BearisterAI LLC 2108 N ST #17637</li>
                <li>Sacramento, CA 95816</li>
              </ul>
              <div className="flex gap-2 mt-4">
                <div className="w-8 h-8 bg-gray-700/50 rounded flex items-center justify-center hover:bg-gray-600/50 cursor-pointer backdrop-blur-sm">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-700/50 rounded flex items-center justify-center hover:bg-gray-600/50 cursor-pointer backdrop-blur-sm">
                  <span className="text-white text-sm">@</span>
                </div>
                <div className="w-8 h-8 bg-gray-700/50 rounded flex items-center justify-center hover:bg-gray-600/50 cursor-pointer backdrop-blur-sm">
                  <span className="text-white text-sm">in</span>
                </div>
                <div className="w-8 h-8 bg-gray-700/50 rounded flex items-center justify-center hover:bg-gray-600/50 cursor-pointer backdrop-blur-sm">
                  <span className="text-white text-sm">📧</span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
