<template>
    <div
        class="flex flex-col  lg:flex-row xl:flex-row  justify-center items-start lg:items-center xl:items-center  overflow-hidden pb-12 sm:pb-24">




        <div
            class="    shadow-2xl shadow-black/60 z-10 h-[60vh] lg:h-[80vh] xl:h-[80vh] rounded-br-3xl background-gradient w-10/12 md:w-11/12  lg:w-1/2 xl:w-1/2  flex flex-col justify-center items-start ">
            <div class="text-left z-10  px-4 max-w-4xl  flex-grow flex-col flex items-start justify-center">



                <img class=" my-2 h-4 lg:h-6 xl:h-6" src="/Success/googlerating.svg" alt="">



                <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-black text-white">
                    Die neue Generation des Designs
                </h1>
                <p class="text-white  my-2 text-sm  sm:text-lg ">
                    Hier finden Sie alles, was Sie benötigen, um erfolgreiche Websites zu designen, egal ob Website oder
                    Mobile App.
                </p>

                <div class="my-2 flex flex-col sm:flex-row items-center">
                    <a href="#pricing"
                        class="text-sm  sm:text-base px-4 font-bold bg-btn-black shadow-lg shadow-white/20 rounded-full py-2 text-white">
                        Projekt Starten
                    </a>
                    <a href="#pricing"
                        class="text-sm  sm:text-base px-4  leading-6 py-2 text-white">
                        oder Call buchen
                    </a>

                   
                </div>



            </div>





            <div
                class="w-full pb-4  inline-flex flex-nowrap overflow-hidden  [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <ul
                    class="flex   items-center justify-center  md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll  ">
                    <li>
                        <img class="h-6" src="/Logos/adobe.svg" alt="Facebook" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/airbnb.svg" alt="Disney" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/calendly.svg" alt="Facebook" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/discord.svg" alt="Apple" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/github.svg" alt="Spark" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/google.svg" alt="Samsung" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/loom.svg" alt="Quora" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/netflix.svg" alt="Sass" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/shopify.svg" alt="Quora" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/spotify.svg" alt="Sass" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/twitch.svg" alt="Quora" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/youtube.svg" alt="Sass" />
                    </li>
                </ul>
                <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                    aria-hidden="true">
                    <li>
                        <img class="h-6" src="/Logos/adobe.svg" alt="Facebook" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/airbnb.svg" alt="Disney" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/calendly.svg" alt="Facebook" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/discord.svg" alt="Apple" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/github.svg" alt="Spark" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/google.svg" alt="Samsung" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/loom.svg" alt="Quora" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/netflix.svg" alt="Sass" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/shopify.svg" alt="Quora" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/spotify.svg" alt="Sass" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/twitch.svg" alt="Quora" />
                    </li>
                    <li>
                        <img class="h-6" src="/Logos/youtube.svg" alt="Sass" />
                    </li>
                </ul>
            </div>



        </div>



        <div class=" w-1/2  ">


            <div class="flex gap-x-4 sm:gap-x-8 pt-10 sm:pt-8 sm:pb-4 relative -translate-x-24  ">
                <div v-for="image in images1" :key="image.img" class="">
                    <div class=" h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64  ">
                        <img :src="image.img" :alt="image.alt" class=" rounded-lg  shadow-xl ">
                    </div>

                </div>


            </div>



            <div class="flex gap-x-4 sm:gap-x-8  py-4 relative -translate-x-12  ">
                <div v-for="image in images2" :key="image.img" class="">
                    <div class="h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
                        <img :src="image.img" :alt="image.alt" class=" rounded-lg  shadow-xl ">
                    </div>
                </div>
            </div>









        </div>






    </div>





    
</template>

<script setup>



const images1 = [
    {
        img: "https://backend.dv-it.ch/wp-content/uploads/2024/06/Brutalism.png"
        , alt: "Test"
    },
    {
        img: "https://backend.dv-it.ch/wp-content/uploads/2024/06/Nike.png"
        , alt: "Test"
    },
    {
        img: "https://backend.dv-it.ch/wp-content/uploads/2024/06/Valentino3D.webp"
        , alt: "Test"
    },
    {
        img: "https://backend.dv-it.ch/wp-content/uploads/2024/06/Yamah3D.webp"
        , alt: "Test"
    },
    {
        img: "https://backend.dv-it.ch/wp-content/uploads/2024/06/Keypad3D.webp"
        , alt: "Test"
    },
]


const images2 = [
    {
        img: "https://backend.dv-it.ch/wp-content/uploads/2024/06/AudientEvo43D.webp"
        , alt: "Test"
    },
    {
        img: "https://backend.dv-it.ch/wp-content/uploads/2024/06/AppleWatch3D.webp"

        , alt: "Test"
    },
    {
        img: "https://backend.dv-it.ch/wp-content/uploads/2024/06/dadfe2195591609.6610075d76daa.jpg"
        , alt: "Test"
    },
    {
        img: "https://backend.dv-it.ch/wp-content/uploads/2024/06/Yamah3D.webp"
        , alt: "Test"
    },
    {
        img: "https://backend.dv-it.ch/wp-content/uploads/2024/06/Keypad3D.webp"
        , alt: "Test"
    },
]



</script>