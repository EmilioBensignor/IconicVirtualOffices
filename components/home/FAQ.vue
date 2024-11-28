<template>
  <section class="columnAlignCenter">
    <h2 class="text-center">Frequently asked questions</h2>
    <div class="w-full faqWrapper column">
      <div>
        <Accordion value="0" class="w-full bg-dark-blue border-grey-1" v-for="(faq, index) in faqsLeft" :key="index">
          <AccordionPanel value="1">
            <AccordionHeader>
              <p>{{ faq.question }}</p>
            </AccordionHeader>
            <AccordionContent>
              <ClientOnly>
                <p v-html="faq.answer"></p>
              </ClientOnly>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
      <div>
        <Accordion value="0" class="w-full bg-dark-blue border-grey-1" v-for="(faq, index) in faqsRight" :key="index">
          <AccordionPanel value="1">
            <AccordionHeader>
              <p>{{ faq.question }}</p>
            </AccordionHeader>
            <AccordionContent>
              <ClientOnly>
                <p v-html="faq.answer"></p>
              </ClientOnly>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      faqsLeft: [
        {
          question: "Where can I find Virtual Office in Aventura?",
          answer: "<p>Iconic Workspaces, located in Aventura ParkSquare, offers flexible Virtual Office Plans with a prestigious business address, mail reception, phone call answering service, secretarial services, discounted rates for meeting rooms; and workspace hours included for select packages.</p>",
        },
        {
          question: "Where can I get a virtual address in Miami?",
          answer: "<p>You can get a virtual address in Miami at office serviced centers that provide this type of service. At Iconic Workspaces we offer a prestigious business address, mail reception, personalized receptionist service, dedicated telephone line and access to business services.</p>",
        },
        {
          question: "How much is a virtual business address in Miami? ",
          answer: "<p>A virtual office ranges between $65.00 and $319.00. At ICONIC Workspaces we have virtual office plans starting at $65.00 a month in our Downtown Miami location.</p>",
        },
        {
          question: "Do I get a mailing address with a Virtual Office?",
          answer: "<p>Yes, the Virtual Office includes a mailing address with mail reception service. At Iconic Workspace we have Virtual Office Plans from only $65/month.</p>",
        },
      ],
      faqsRight: [
        {
          question: "Can I have a Virtual Office whilst living in a different country?",
          answer: "<p>Yes, at ICONIC Workspaces we offer virtual packages that include the use of a professional business address with mail reception service.</p>",
        },
        {
          question: "How do I get a virtual address for my business?",
          answer: "<p>To get a virtual address for your business you should find a virtual office solution suitable to your business needs. At Iconic Workspaces we offer a selection of flexible virtual plans for you to choose and customize the services you need in a quick and simple sign-up process.</p>",
        },
        {
          question: "What benefits do a virtual office have?",
          answer: "<div class='faqSpacing'><p>Provide a professional image to your business at affordable cost.</p><p>Use a prestigious business address and phone number on your business marketing material: website and business cards.</p><p>Access to customized admin services such as mail scanning, mail forwarding, phone calls answering service, secretarial tasks and more.</p><p>Enjoy the benefits of an executive office service without the expense of a physical office rent, which makes this solution perfect to expand your office network.</p></div>",
        },
        {
          question:
            "What is the redeemable value of the EVOLVE credits to use the space?",
          answer: "<div class='faqSpacing'><p>The <span class='font-bold'>Evolve Plan</span> includes <span class='font-bold'>250 monthly credits</span>, giving you flexibility to use workspace or meeting rooms at discounted rates. Credits can be applied for private offices, coworking spaces, or meeting rooms at either our Downtown Miami or Aventura locations.</p><div><p class='font-bold'>Downtown Miami Options</p><ul><li><span class='font-bold'>Office:</span> 8.3 hours/month</li><li><span class='font-bold'>Medium Meeting Room:</span> 5 hours/month</li><li><span class='font-bold'>Large Meeting Room:</span> 4.16 hours/month</li></ul></div><div><p class='font-bold'>Aventura Options</p><ul><li><span class='font-bold'>Coworking Desk:</span> 6 days/month</li><li><span class='font-bold'>Office:</span> 8 hours/month</li><li><span class='font-bold'>Medium Meeting Room:</span> 4 hours/month</li><li><span class='font-bold'>Large Meeting Room:</span> 2 hours/month</li></ul></div><div><p class='font-bold'>Examples:</p><ul><li>Combine office and meeting room hours as needed.</li><li>Use 250 credits for weekly meetings or a full-day booking for larger presentations.</li></ul></div><p class='credits'>Credits do not roll over and must be used within the month.</p></div>",
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

.faqWrapper .p-accordion {
  background: linear-gradient(90deg,
      var(--color-light-blue),
      var(--color-mid-blue),
      var(--color-electric-blue));
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

.faqWrapper .p-accordionpanel:not(.p-disabled).p-accordionpanel-active>.p-accordionheader,
.faqWrapper .p-accordionpanel:not(.p-disabled).p-accordionpanel-active>.p-accordionheader:hover,
.faqWrapper .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled)>.p-accordionheader:hover {
  color: var(--color-electric-blue);
  background: var(--color-white);
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

.faqWrapper .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
  color: var(--color-mid-blue);
}

.faqWrapper .p-accordionpanel:not(.p-disabled).p-accordionpanel-active>.p-accordionheader:hover .p-accordionheader-toggle-icon {
  color: var(--color-mid-blue);
}

.faqWrapper .p-accordioncontent-content {
  background: var(--color-white);
  padding: 0.75rem 0;
}

.faqSpacing, .faqSpacing > div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faqSpacing ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 1rem;
}

.faqSpacing ul li {
  list-style-type: disc;
}

.faqSpacing .credits {
  font-style: italic;
}

@media (width >=660px) {

  .faqWrapper .p-accordionheader,
  .faqWrapper .p-accordioncontent-content {
    padding: 1rem 0.75rem;
  }
}

@media (width >=1080px) {
  .faqWrapper .p-accordion {
    flex-direction: column;
  }

  .faqWrapper .p-accordionheader,
  .faqWrapper .p-accordioncontent-content {
    padding: 1rem 0.75rem;
  }

  .faqWrapper .p-accordionheader p,
  .faqWrapper .p-accordioncontent-content p {
    font-size: 1rem;
  }

  .faqSpacing ul {
    padding-left: 1.75rem;
  }
}

@media (width >=1440px) {
  .faqWrapper .p-accordionheader p {
    font-size: 1.25rem;
  }
}
</style>

<style scoped>
.faqWrapper>div {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

@media (width >=1080px) {
  .faqWrapper {
    flex-direction: row;
    gap: 1.5rem;
  }

  .faqWrapper>div {
    width: 50%;
    gap: 1rem;
  }
}
</style>
