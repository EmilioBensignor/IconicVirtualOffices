<template>
  <section class="columnAlignCenter">
    <h2 class="text-center">Frequently asked questions</h2>
    <div class="faqWrapper column">
      <Accordion
        value="0"
        class="w-full bg-dark-blue border-grey-1"
        v-for="(faq, index) in faqs"
        :key="index"
      >
        <AccordionPanel value="1">
          <div class="w-full headerWrapper">
            <AccordionHeader>
              <p>{{ faq.question }}</p>
            </AccordionHeader>
          </div>

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

.faqWrapper .headerWrapper {
  background: linear-gradient(
    90deg,
    var(--color-light-blue),
    var(--color-mid-blue),
    var(--color-electric-blue)
  );
  padding-bottom: 3px;
}

.faqWrapper .p-accordionheader {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--color-white);
  font-size: 0.875rem;
  transition: all 0.3s;
  padding: 0.75rem 0;
}

.faqWrapper .p-accordionheader p {
  width: 90%;
}

.faqWrapper .p-accordionheader-toggle-icon {
  width: 10%;
  color: var(--color-electric-blue);
}

.faqWrapper .p-icon {
  height: 1rem;
}

.faqWrapper
  .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled)
  .p-accordionheader:hover
  .p-accordionheader-toggle-icon {
    color: var(--color-mid-blue);
}
</style>

<style scoped>
.faqWrapper {
  gap: 0.75rem;
}
</style>
