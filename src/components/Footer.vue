<template>
  <footer class="background-gradient" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-mobile-body font-bold text-white">Nützliche Links</h3>
              <ul role="list" class="mt-6 space-y-2">
                <li v-for="item in navigation.solutions" :key="item.name">
                  <a :href="item.href" class="text-mobile-bodySM leading-mobile-bodySM text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-mobile-body font-bold  text-white">Meine Links</h3>
              <ul role="list" class="mt-6 space-y-2">
                <li v-for="item in navigation.support" :key="item.name">
                  <a :href="item.href" class="text-mobile-bodySM leading-mobile-bodySM text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-mobile-body font-bold text-white">Für Kunden</h3>
              <ul role="list" class="mt-6 space-y-2">
                <li v-for="item in navigation.company" :key="item.name">
                  <a :href="item.href" class="text-mobile-bodySM leading-mobile-bodySM text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-mobile-body font-bold leading-6 text-white">Legal</h3>
              <ul role="list" class="mt-6 space-y-2">
                <li v-for="item in navigation.legal" :key="item.name">
                  <a :href="item.href" class="text-mobile-bodySM leading-mobile-bodySM text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-10 xl:mt-0">
          <h3 class="text-mobile-body font-bold text-white">Melde dich für unseren Newsletter an</h3>
          <p class="mt-2 text-mobile-bodySM leading-mobile-bodySM  text-gray-300">Die neuesten Nachrichten, Artikel und Ressourcen, wöchentlich
            in deinem Posteingang.</p>
          <form class="mt-6 sm:flex sm:max-w-md">
            <label for="email-address" class="sr-only">Email addresse</label>
            <input type="email" name="email-address" id="email-address" autocomplete="email" required=""
              class="w-full min-w-0 appearance-none rounded-md border-0 bg-white/20 px-3 py-1.5 text-mobile-bodySM text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/50 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
              placeholder="Gib deine E-Mail Adresse ein" />
            <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <button type="submit"
                class="flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-mobile-bodyLG font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Anmelden</button>
            </div>
          </form>
        </div>
      </div>
      <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
        <div class="flex space-x-6 md:order-2">
          <a v-for="item in navigation.social" :key="item.name" :href="item.href"
            class="text-gray-500 hover:text-gray-400">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <p class="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">&copy; 2024 TillTech Gmbh, All rights
          reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, h } from 'vue'

const navigation = {
  solutions: [
    { name: 'Home', href: '/' },
    { name: 'Unser Prozess', href: '/#process' },
    { name: 'Dienstleistungen', href: '/#service' },
    { name: 'Preise', href: '/#pricing' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
  ],
  support: [
    { name: 'Gratis Download 🔥', href: '/#download' },
    { name: 'Bio Links', href: '/links' },
    { name: 'TillTech & Klimawandel', href: 'https://climate.stripe.com/nAoVjH' },
  ],
  company: [
    { name: 'Kundenportal', href: 'https://billing.stripe.com/p/login/28oaHy9m414Bfgk288' },
    { name: 'Call buchen', href: 'https://calendly.com/tilltech/tilltech-infogesprach?month=2024-07' },

  ],
  legal: [
    { name: 'Datenschutz', href: 'https://rainbow-side-8bf.notion.site/Datenschutz-4f35065d70174eba91e6f96ea514e3d0' },
    { name: 'AGB', href: 'https://rainbow-side-8bf.notion.site/AGB-e17deb03fd6543f1a5655de006bbdaf6?pvs=25' },
    { name: 'Impressum', href: 'https://rainbow-side-8bf.notion.site/Impressum-c9bf006259e74aafb2f9db0c20bf612f' },
    { name: 'Cookie Richtlinie', href: 'https://rainbow-side-8bf.notion.site/Cookie-Richtlinie-eeb932b267c840c8b56637b20e1dadde' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100089148592975',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'white', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/tilltech_official',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'white', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'X',
      href: 'https://x.com/till_tech',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'white', viewBox: '0 0 24 24' }, [
            h('path', {
              d: 'M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z',
            }),
          ]),
      }),
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@tilltech_official',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'white', viewBox: '0 0 750.06 850.04' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'm569.11,160.41c-5.06-2.62-9.99-5.48-14.77-8.59-13.89-9.18-26.62-20-37.92-32.22-28.28-32.36-38.84-65.19-42.73-88.17h.16c-3.25-19.08-1.91-31.42-1.7-31.42h-128.81v498.09c0,6.69,0,13.3-.28,19.83,0,.81-.08,1.56-.12,2.44,0,.36,0,.73-.08,1.11v.28c-2.76,36.29-23.39,68.83-55.03,86.81-16.24,9.24-34.61,14.09-53.3,14.06-60.02,0-108.66-48.94-108.66-109.38s48.64-109.38,108.66-109.38c11.36-.01,22.65,1.78,33.45,5.3l.16-131.16c-66.29-8.56-133.15,10.99-184.38,53.94-22.2,19.29-40.87,42.31-55.16,68.02-5.44,9.38-25.95,47.05-28.44,108.19-1.56,34.7,8.86,70.66,13.83,85.52v.31c3.12,8.75,15.23,38.61,34.97,63.78,15.91,20.19,34.71,37.93,55.8,52.64v-.31l.31.31c62.36,42.37,131.5,39.59,131.5,39.59,11.97-.48,52.06,0,97.59-21.58,50.5-23.92,79.25-59.56,79.25-59.56,18.37-21.3,32.97-45.56,43.19-71.77,11.66-30.64,15.55-67.39,15.55-82.08V250.77c1.56.94,22.38,14.7,22.38,14.7,0,0,29.98,19.22,76.77,31.73,33.56,8.91,78.78,10.78,78.78,10.78v-127.87c-15.84,1.72-48.02-3.28-80.95-19.7Z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },

    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@tilltech_official',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'white', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
  ],
}
</script>