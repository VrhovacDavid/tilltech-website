<template>
  <div class=" flex flex-col sm:flex-row justify-center items-center">
    <div class="max-w-4xl px-4 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 class="text-2xl sm:text-3xl font-bold leading-10 tracking-tight text-gray-900">Häufig gestellte Fragen</h2>

        <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
          <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6 max-w-2xl" v-slot="{ open }">
            <dt>
              <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
                <span class="text-base font-semibold leading-7">{{ faq.question }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                  <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base leading-7 text-gray-600">{{ faq.answer }}</p>
            </DisclosurePanel> 
          </Disclosure>
        </dl>
      </div>
    </div>

    <div class="border-2 background-gradient p-4  rounded-3xl flex flex-col justify-center items-center mx-4 shadow-xl">
      <img class="h-24 w-24 rounded-full my-2 " src="/Branding/David.webp" alt="">
      <h3 class="text-xl sm:text-2xl font-black text-center text-white">Buche ein 15 Minuten Intro Call</h3>
      <a href="https://calendly.com/tilltech/tilltech-infogesprach"
        class="my-4 bg-btn-black text-white block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Jetzt
        Call buchen</a>
      <p class="text-white">Lieber über E-Mail?
        <a href="mailto:hello@tilltech.ch" class="ml-2 font-semibold text-orange-400">hello@tilltech.ch</a>

      </p>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'

const faqs = [
  {
    question: "Warum sollte ich nicht einfach einen festangestellten Designer einstellen?",
    answer:
      "Gute Frage! Zum Beispiel übersteigen die jährlichen Kosten für einen festangestellten Senior Designer mittlerweile 100'000.-, zuzüglich Nebenleistungen (und viel Glück bei der Suche nach einem verfügbaren). Darüber hinaus hast du vielleicht nicht immer genug Arbeit, um sie ständig zu beschäftigen, sodass du für nicht genutzte Zeit zahlst. Mit dem Monatsplan kannst du dein Abonnement nach Bedarf pausieren und fortsetzen, um sicherzustellen, dass du deinen Designer nur bezahlst, wenn auch Arbeit für ihn vorliegt.",
  },
  {
    question: "Gibt es eine Grenze, wie viele Anfragen ich stellen kann?",
    answer:
      "Sobald du abonniert bist, kannst du so viele Designanfragen in deine Warteschlange aufnehmen, wie du möchtest, und sie werden nacheinander abgearbeitet.",
  },
  {
    question: "Wie schnell erhalte ich meine Grafik Designs?",
    answer:
      "Im Durchschnitt werden die meisten Anfragen in nur zwei Tagen oder weniger bearbeitet. Komplexere Anfragen können jedoch länger dauern (Grössere Webseiten, Mobile Apps, etc.).",
  },
  {
    question: "Wer sind die Designer?",
    answer:
      "Es mag überraschend sein, aber TillTech ist tatsächlich eine Ein-Mann-Agentur. Das bedeutet, du arbeitest direkt mit mir, dem Gründer von TillTech. Anfragen für Animationen oder benutzerdefinierte Illustrationen werden jedoch von Partnerdesignern bearbeitet.",
  },
  {
    question: "Wie funktioniert die Pausierungsfunktion?",
    answer:
      "Wir verstehen, dass du möglicherweise nicht genug Designarbeit hast, um einen ganzen Monat zu füllen. Vielleicht hast du derzeit nur ein oder zwei Designanfragen. Hier ist die Pausierung deines Abonnements praktisch. Die Abrechnungszyklen basieren auf einem 31-Tage-Zeitraum. Angenommen, du meldest dich an und nutzt den Service 21 Tage lang, und entscheidest dich dann, dein Abonnement zu pausieren. Das bedeutet, dass der Abrechnungszyklus pausiert wird und du 10 Tage des Services übrig hast, die du jederzeit in der Zukunft nutzen kannst.",
  },
  {
    question: "In welchen Programmen werden die Designs erstellt?",
    answer:
      "Die meisten Anfragen werden mit Programmen wie Figma, Adobe Illustrator, Photoshop, Blender, Premiere Pro, After Effects, usw. erstellt.",
  },
  {
    question: "Wie kann ich Designs anfordern?",
    answer:
      "TillTech bietet eine Menge Flexibilität bei der Anforderung von Designs über Trello. Einige gängige Methoden, wie Kunden Designs anfordern, sind direkt über Trello, das Teilen von Google-Docs oder Wireframes oder sogar das Aufnehmen eines kurzen Loom-Videos (für diejenigen, die es vorziehen, ihre Briefings nicht auszuschreiben). Grundsätzlich ist alles, was in Trello verlinkt oder geteilt werden kann, zulässig.",
  },
  {
    question: "Was passiert, wenn mir das Design nicht gefällt?",
    answer:
      "Keine Sorge! Wir werden das Design so lange überarbeiten, bis du zu 100% zufrieden bist.",
  },
  {
    question: "Gibt es Designarbeiten, die ihr nicht anbietet?",
    answer:
      "Absolut. TillTech deckt folgende Designarbeiten nicht ab: Animierte Grafiken (GIFs usw.), Zeichnungen, komplexe Verpackungen und umfangreiche Printdesigns (Magazine, Bücher usw.).",
  },
  {
    question: "Was ist, wenn ich nur eine einzige Anfrage habe?",
    answer:
      "Das ist in Ordnung. Du kannst dein Abonnement nach Fertigstellung pausieren und zurückkehren, wenn du weitere Designbedürfnisse hast. Es besteht keine Notwendigkeit, den Rest deines Abonnements verfallen zu lassen.",
  },
  {
    question: "Gibt es Rückerstattungen, wenn mir der Service nicht gefällt?",
    answer:
      "Aufgrund der hohen Qualität der Arbeit werden keine Rückerstattungen gewährt.",
  },


]
</script>
