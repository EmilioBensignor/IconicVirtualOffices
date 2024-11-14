<template>
  <section class="columnAlignCenter">
    <h2 class="text-center">Frequently asked questions</h2>
    <div class="faqWrapper column">
      <Accordion
        value="0"
        class="w-full bg-dark-blue border-grey-1"
        v-for="(faq, index) in faqs"
        :key="index">
        <AccordionPanel value="1">
          <AccordionHeader>
            <div>
              <p>{{ faq.question }}</p>
            </div>
          </AccordionHeader>
          <AccordionContent>
            <p>{{ faq.answer }}</p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        faqs: [
          {
            question: "Where can I find Virtual Office in Aventura?",
            answer: "FAQ Answer",
          },
          {
            question: "Where can I get a virtual address in Miami?",
            answer: "FAQ Answer",
          },
          {
            question: "How much is a virtual business address in Miami? ",
            answer: "FAQ Answer",
          },
          {
            question: "Do I get a mailing address with a Virtual Office?",
            answer: "FAQ Answer",
          },
          {
            question: "How do I get a virtual address for my business?",
            answer: "FAQ Answer",
          },
          {
            question: "What benefits do a virtual office have?",
            answer: "FAQ Answer",
          },
          {
            question: "How quickly can I be up and running?",
            answer: "FAQ Answer",
          },
          {
            question:
              "Can I have a Virtual Office whilst living in a different Country?",
            answer: "FAQ Answer",
          },
        ],
      };
    },
  };
</script>

<style>
  .faqWrapper .p-accordionheader,
  .faqWrapper .p-accordioncontent-content,
  .faqWrapper .p-accordionpanel {
    border: none;
  }

  .faqWrapper .p-accordionheader {
    background: linear-gradient(
      90deg,
      var(--color-light-blue),
      var(--color-mid-blue),
      var(--color-electric-blue)
    );
    font-size: 0.875rem;
    padding-bottom: 3px;
  }

  .faqWrapper .p-accordionheader div {
    background: var(--color-white);
    padding: 1rem 0;
  }
</style>

<style scoped>
  .faqWrapper {
    gap: 0.75rem;
  }
</style>
