"use client";
import { TimelineContent } from "../ui/timeline-animations";
import VerticalCutReveal from "../ui/vertical-cut-reveal";
import { Card, CardContent, CardHeader } from "../ui/card";
import Founder from "../../assests/Team-photos/Founder.png"
import ButtonHover1 from "../ui/button-hover1";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function AboutSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  };
  const revealVariants2 = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -40,
      opacity: 0,
    },
  };
  const revealVariants3 = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.7,
      },
    }),
    hidden: {
      opacity: 0,
    },
  };

  const founder = [
    "Certified Cybersecurity specialist (ISC2 CC)",
    "Passionate bug bounty hunter",
    "Skilled in Java, Linux, and networking"
  ]

  const member = [
    "Expert in building secure, maintainable web applications.",
    "Part time Joker",
    "Lent some of his IQ to Einstien"
  ]
  return (
    <section
      className="relative py-32 px-4 bg-gray-50 overflow-hidden"
      ref={heroRef}
    >
      <svg className="absolute -top-[999px] -left-[999px] w-0 h-0">
        <defs>
          <clipPath id="clip-squiggle" clipPathUnits="objectBoundingBox">
            <path
              d="M0.434125 0.00538712C0.56323 -0.00218488 0.714575 -0.000607013 0.814404 0.00302954L0.802642 0.163537C0.813884 0.167475 0.824927 0.172002 0.835358 0.177236C0.869331 0.194281 0.909224 0.225945 0.90824 0.27348C0.907177 0.324883 0.858912 0.354946 0.822651 0.36933C0.857426 0.376783 0.894591 0.387558 0.925837 0.404287C0.968002 0.426862 1.00569 0.464702 0.999287 0.515878C0.993163 0.564818 0.950731 0.597642 0.904098 0.615682C0.88204 0.624216 0.858239 0.62992 0.834803 0.633808C0.858076 0.639299 0.881603 0.646639 0.90267 0.656757C0.946271 0.677698 0.986875 0.715485 0.978905 0.768037C0.972241 0.811979 0.93615 0.843109 0.895204 0.862035C0.858032 0.879217 0.815169 0.887544 0.778534 0.892219C0.704792 0.901628 0.614366 0.901003 0.535183 0.899176C0.508115 0.898551 0.482286 0.89779 0.45773 0.897065C0.404798 0.895504 0.357781 0.894117 0.317008 0.894657C0.301552 0.894862 0.289265 0.895348 0.279749 0.895976C0.251913 0.937168 0.226467 0.980907 0.216015 1L0 0.941216C0.0140558 0.915539 0.051354 0.851547 0.0902557 0.797766C0.118421 0.758828 0.1722 0.745373 0.200402 0.740217C0.168437 0.733484 0.134299 0.723597 0.105102 0.708076C0.0614715 0.684884 0.0263696 0.64687 0.0325498 0.596965C0.0385804 0.548267 0.0803829 0.515256 0.12709 0.496909C0.146901 0.489127 0.168128 0.483643 0.189242 0.479724C0.163739 0.476035 0.137977 0.471053 0.115188 0.463936C0.0874831 0.455285 0.00855855 0.424854 0.016569 0.357817C0.0231721 0.302559 0.0838593 0.276249 0.116031 0.266164C0.149646 0.255625 0.188201 0.2505 0.221821 0.247468C0.208809 0.243824 0.195905 0.239492 0.183801 0.234287C0.152543 0.220846 0.101565 0.189547 0.105449 0.136312C0.108467 0.0949629 0.144168 0.0682612 0.171101 0.0543099C0.197578 0.0405945 0.227933 0.032236 0.25348 0.0267029C0.305656 0.0154021 0.370636 0.00911076 0.434125 0.00538712Z"
              fill="black"
            />
          </clipPath>
        </defs>
      </svg>
      <svg className="absolute -top-[999px] -left-[999px] w-0 h-0">
        <defs>
          <clipPath id="differentone16" clipPathUnits="objectBoundingBox">
            <path
              d="M0.911218 0.329658C0.917139 0.29671 0.914994 0.262818 0.904967 0.23088C0.894939 0.198941 0.877327 0.169906 0.853635 0.146256C0.829944 0.122605 0.800878 0.105043 0.768923 0.0950708C0.736967 0.0850983 0.703072 0.083012 0.670134 0.0889901C0.651042 0.0615242 0.625587 0.0390856 0.595943 0.0235895C0.566299 0.00809344 0.533346 0 0.499896 0C0.466446 0 0.433493 0.00809344 0.403849 0.0235895C0.374204 0.0390856 0.34875 0.0615242 0.329658 0.0889901C0.29675 0.0830893 0.262904 0.0852337 0.231005 0.0952406C0.199106 0.105248 0.1701 0.12282 0.14646 0.14646C0.12282 0.1701 0.105248 0.199106 0.0952406 0.231005C0.0852337 0.262904 0.0830893 0.29675 0.0889901 0.329658C0.0615242 0.34875 0.0390856 0.374204 0.0235895 0.403849C0.00809344 0.433493 0 0.466446 0 0.499896C0 0.533346 0.00809344 0.566299 0.0235895 0.595943C0.0390856 0.625587 0.0615242 0.651042 0.0889901 0.670134C0.0830405 0.703077 0.0851562 0.73697 0.0951563 0.768917C0.105156 0.800864 0.122744 0.829915 0.146414 0.853586C0.170085 0.877256 0.199136 0.894844 0.231083 0.904844C0.26303 0.914844 0.296923 0.916959 0.329866 0.91101C0.348958 0.938476 0.374413 0.960914 0.404057 0.97641C0.433701 0.991907 0.466654 1 0.500104 1C0.533554 1 0.566507 0.991907 0.596151 0.97641C0.625796 0.960914 0.65125 0.938476 0.670343 0.91101C0.70327 0.916921 0.737139 0.914776 0.769057 0.904759C0.800976 0.894741 0.829997 0.877149 0.853642 0.853483C0.877287 0.829818 0.894854 0.800782 0.904844 0.768854C0.914834 0.736927 0.916949 0.703056 0.91101 0.670134C0.938476 0.651042 0.960914 0.625587 0.97641 0.595943C0.991907 0.566299 1 0.533346 1 0.499896C1 0.466446 0.991907 0.433493 0.97641 0.403849C0.960914 0.374204 0.938476 0.34875 0.91101 0.329658H0.911218Z"
              fill="black"
            />
          </clipPath>
        </defs>
      </svg>
      <svg className="absolute -top-[999px] -left-[999px] w-0 h-0">
        <defs>
          <clipPath id="differentone8" clipPathUnits="objectBoundingBox">
            <path
              d="M0.830625 0.5C0.883908 0.453139 0.926579 0.395449 0.955787 0.330781C0.984995 0.266114 1.00007 0.195958 1 0.125C1 0.0918481 0.98683 0.0600539 0.963388 0.0366119C0.939946 0.0131698 0.908152 2.32816e-07 0.875 2.32816e-07C0.725625 2.32816e-07 0.591667 0.0654169 0.5 0.169375C0.453139 0.116092 0.395449 0.0734212 0.330781 0.0442131C0.266114 0.0150049 0.195958 -6.83243e-05 0.125 2.32816e-07C0.0918481 2.32816e-07 0.0600539 0.0131698 0.0366119 0.0366119C0.0131698 0.0600539 2.32816e-07 0.0918481 2.32816e-07 0.125C2.32816e-07 0.274375 0.0654169 0.408333 0.169375 0.5C0.116092 0.546861 0.0734212 0.604551 0.0442131 0.669219C0.0150049 0.733887 -6.83243e-05 0.804042 2.32816e-07 0.875C2.32816e-07 0.908152 0.0131698 0.939946 0.0366119 0.963388C0.0600539 0.98683 0.0918481 1 0.125 1C0.274375 1 0.408333 0.934583 0.5 0.830625C0.546861 0.883908 0.604551 0.926579 0.669219 0.955787C0.733887 0.984995 0.804042 1.00007 0.875 1C0.908152 1 0.939946 0.98683 0.963388 0.963388C0.98683 0.939946 1 0.908152 1 0.875C1 0.725625 0.934583 0.591667 0.830625 0.5Z"
              fill="black"
            />
          </clipPath>
        </defs>
      </svg>
      <svg className="absolute -top-[999px] -left-[999px] w-0 h-0">
        <defs>
          <clipPath id="clip-rect" clipPathUnits="objectBoundingBox">
            <path
              d="M0.5 0L0.550709 0.0460541C0.541963 0.0640581 0.528578 0.0791151 0.513027 0.0917341C0.520456 0.0907291 0.527892 0.0897201 0.535322 0.0887131C0.611493 0.0783851 0.687008 0.0681471 0.74727 0.0620541C0.784018 0.0583381 0.81958 0.0556691 0.848085 0.0560471C0.861663 0.0562271 0.879579 0.0571111 0.897003 0.0610981C0.909779 0.0640211 0.953305 0.0757431 0.966627 0.113912C0.981722 0.157163 0.941632 0.185488 0.934622 0.19038C0.921226 0.199729 0.905329 0.206897 0.892499 0.212115C0.870649 0.221001 0.842659 0.230142 0.811999 0.239254C0.83681 0.236656 0.861008 0.235257 0.882435 0.23621C0.898377 0.236918 0.921559 0.239201 0.943733 0.24826C0.970081 0.259024 0.995291 0.280051 0.999439 0.311122C1.00342 0.340933 0.985349 0.363373 0.972847 0.375304C0.959707 0.387843 0.943414 0.397844 0.928912 0.405582C0.908422 0.416516 0.883341 0.427176 0.856112 0.437447C0.864364 0.436866 0.872329 0.436539 0.879902 0.436521C0.894726 0.436485 0.918867 0.437439 0.942277 0.446087C0.955191 0.450858 0.970509 0.458949 0.982453 0.472319C0.994857 0.486205 0.999891 0.501633 0.999891 0.515923C0.999891 0.545114 0.979611 0.565612 0.967435 0.575746C0.953994 0.586934 0.937862 0.595927 0.923325 0.603007C0.898842 0.614932 0.868113 0.626538 0.834975 0.637664C0.839838 0.637396 0.844565 0.637223 0.849131 0.637157C0.862911 0.636959 0.885294 0.637431 0.907315 0.644301C0.91929 0.648037 0.935423 0.654982 0.948734 0.667909C0.96307 0.681831 0.969583 0.69831 0.969583 0.714241C0.969583 0.756168 0.930027 0.781711 0.913544 0.791403C0.891777 0.804203 0.864569 0.815187 0.838085 0.824629C0.790903 0.84145 0.729751 0.858922 0.669115 0.876246C0.66103 0.878556 0.652955 0.880864 0.644923 0.883166C0.574356 0.903398 0.504814 0.923898 0.447288 0.945539C0.385857 0.968649 0.354123 0.98743 0.343618 0.999097L0.202975 0.923461C0.215492 0.909559 0.231313 0.896865 0.249116 0.885256C0.245423 0.885811 0.241771 0.886347 0.238165 0.886862C0.198801 0.892483 0.158749 0.89657 0.125136 0.895416C0.10872 0.894852 0.0869431 0.892883 0.0658381 0.885656C0.0427861 0.877762 0.014566 0.861068 0.00449603 0.831173C-0.00578897 0.800641 0.00946505 0.775473 0.0227 0.761104C0.035552 0.747151 0.0521941 0.73661 0.0660451 0.729015C0.0763781 0.723348 0.0879781 0.717821 0.10046 0.712441C0.0918191 0.7114 0.0828791 0.709795 0.0740171 0.70737C0.0519021 0.701317 0.021352 0.687312 0.00720103 0.65819C-0.00776397 0.627392 0.00549305 0.600161 0.018904 0.584108C0.03142 0.569125 0.048329 0.557944 0.061925 0.550133C0.0899171 0.534051 0.127869 0.51891 0.167323 0.504992C0.189196 0.497276 0.213195 0.489371 0.238664 0.48135C0.201179 0.486283 0.163943 0.489581 0.131973 0.488597C0.114641 0.488064 0.0935231 0.486164 0.0730311 0.480032C0.0519071 0.47371 0.024429 0.460566 0.00936805 0.434874C-0.00727695 0.406482 0.000740049 0.379077 0.014172 0.360311C0.026036 0.343734 0.043174 0.331657 0.0566 0.32353C0.084167 0.306842 0.121704 0.291789 0.159992 0.278421C0.179936 0.271457 0.2017 0.264408 0.224764 0.257328C0.191619 0.258997 0.158935 0.259269 0.131101 0.256364C0.115367 0.254721 0.0954681 0.251528 0.0765251 0.244134C0.0569951 0.236512 0.030269 0.220901 0.019911 0.192566C0.00630305 0.155339 0.028173 0.125216 0.050968 0.10819C0.070358 0.0937081 0.094464 0.0847721 0.112073 0.0791001C0.142823 0.0691931 0.183388 0.0604071 0.219871 0.0525041C0.226304 0.0511111 0.232611 0.0497451 0.238714 0.0484051C0.283575 0.0385571 0.323527 0.0289901 0.35429 0.0175781L0.5 0Z"
              fill="black"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Amber Glow Background */}
      <TimelineContent
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff00 40%, #13131300 100%)
      `,
          backgroundSize: "100% 100%",
        }}
        animationNum={2}
        customVariants={revealVariants3}
        timelineRef={heroRef}
      />
      <TimelineContent
        className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#a3a3a32e_1px,transparent_1px),linear-gradient(to_bottom,#a3a3a32e_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000_70%,transparent_110%)]"
        animationNum={3}
        customVariants={revealVariants3}
        timelineRef={heroRef}
      />
      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-blue-600  text-lg font-semibold uppercase mb-6 flex items-center justify-center gap-2">
          About
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.2}
            staggerFrom="last"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 30,
              delay: 0.2,
            }}
            containerClassName="text-[#00000] leading-[120%] text-center  justify-center items-center"
          >
            {
              "A Legacy of Excellence, How Our Dedication Fuels Everything We Do"
            }
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          customVariants={revealVariants}
          timelineRef={heroRef}
          className="text-gray-600 text-center sm:text-lg text-sm mb-8 leading-relaxed"
        >
          CyberShield Solutions is on a mission to make cybersecurity accessible for everyone. 
          We empower students and small businesses to defend against digital threats with affordable, 
          expert support.
        </TimelineContent>

        <TimelineContent
          as="button"
          animationNum={1}
          customVariants={revealVariants3}
          timelineRef={heroRef}
          className="bg-blue-600 hover:bg-blue-600 shadow-lg shadow-blue-600 border border-blue-600 flex w-fit mx-auto gap-2 hover:gap-4 transition-all duration-300 ease-in-out text-white px-5 py-3 rounded-full cursor-pointer"
        >
          Explore Our Services <ArrowRight className="" />
        </TimelineContent>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-4 pt-20 lg:h-[26rem] md:h-[22rem] sm:h-[16rem] h-[14rem]">
        {/* Top Left Image */}
        <TimelineContent
          as="figure"
          animationNum={2}
          timelineRef={heroRef}
          customVariants={revealVariants}
          className="w-full h-full rounded-lg overflow-hidden"
          style={{ clipPath: "url(#clip-squiggle)" }}
        >
          <img
            src={Founder.src}
            alt="Team member"
            width={128}
            height={160}
            className="object-cover w-full h-full"
          />
        </TimelineContent>
        {/* Top Right Image */}
        {/* <TimelineContent
          as="figure"
          animationNum={3}
          timelineRef={heroRef}
          customVariants={revealVariants2}
          className="w-full h-full rounded-lg overflow-hidden"
          style={{ clipPath: "url(#differentone16)" }}
        > */}
            <Card className="bg-white p-0 border-neutral-200">
              <CardHeader className="text-left py-4 border-b bg-gray-100 rounded-xl border-neutral-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Founder</h3>
              </CardHeader>
              <CardContent className="pb-6">
                <ul className="space-y-3 mb-6">
                  {founder.map((skill, index) => (
                    <li key={index} className="text-sm text-gray-700">
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <button
                    className="
                        group relative inline-flex h-12 items-center justify-center 
                        overflow-hidden rounded-md px-6 font-medium transition-all duration-100
                        bg-transparent border-2 border-[#263381] text-black 
                        from-[#f6f7ff] to-[#f5f6ff] bg-linear-to-r
                        dark:from-[#070e41] dark:to-[#263381] dark:text-white 
                        dark:border-[rgb(76_100_255)]

                        translate-x-[3px] translate-y-[3px]
                        [box-shadow:0px_0px_rgb(38_51_129)]
                        hover:[box-shadow:5px_5px_rgb(38_51_129)]
                        hover:translate-x-[0px] hover:translate-y-[0px]

                        dark:hover:[box-shadow:5px_5px_rgb(76_100_255)]
                        dark:active:[box-shadow:0px_0px_rgb(76_100_255)]
                        active:[box-shadow:0px_0px_rgb(38_51_129)]
                        active:translate-x-[3px] active:translate-y-[3px]
                    "
                    >
                    Contact
                </button>
            </Card>
          
        {/* </TimelineContent> */}

        {/* Bottom Left Image */}
        <TimelineContent
          as="figure"
          animationNum={2}
          timelineRef={heroRef}
          customVariants={revealVariants}
          className="w-full h-full rounded-lg overflow-hidden"
          style={{ clipPath: "url(#clip-squiggle)" }}
        >
          <img
            src="https://images.unsplash.com/photo-1611695434398-4f4b330623e6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team member"
            width={128}
            height={160}
            className="object-cover w-full h-full -rotate-6"
          />
        </TimelineContent>

        {/* Bottom Right Image */}
            <Card className="bg-white p-0 border-neutral-200">
              <CardHeader className="text-left py-4 border-b bg-gray-100 rounded-xl border-neutral-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Co-Founder</h3>
              </CardHeader>
              <CardContent className="pb-6">
                <ul className="space-y-3 mb-6">
                  {member.map((skill, index) => (
                    <li key={index} className="text-sm text-gray-700">
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
               <button
                    className="
                        group relative inline-flex h-12 items-center justify-center 
                        overflow-hidden rounded-md px-6 font-medium transition-all duration-100
                        bg-transparent border-2 border-[#263381] text-black 
                        from-[#f6f7ff] to-[#f5f6ff] bg-linear-to-r
                        dark:from-[#070e41] dark:to-[#263381] dark:text-white 
                        dark:border-[rgb(76_100_255)]

                        translate-x-[3px] translate-y-[3px]
                        [box-shadow:0px_0px_rgb(38_51_129)]
                        hover:[box-shadow:5px_5px_rgb(38_51_129)]
                        hover:translate-x-[0px] hover:translate-y-[0px]

                        dark:hover:[box-shadow:5px_5px_rgb(76_100_255)]
                        dark:active:[box-shadow:0px_0px_rgb(76_100_255)]
                        active:[box-shadow:0px_0px_rgb(38_51_129)]
                        active:translate-x-[3px] active:translate-y-[3px]
                    "
                    >
                    Contact
                </button>
              
            </Card>
      </div>
    </section>
  );
}
