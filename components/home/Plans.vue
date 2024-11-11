<template>
  <section>
    <div class="column">
      <h2 class="text-center">Find the right fit</h2>
      <p class="text-center">Where will you base your business?</p>
    </div>
    <Tabs value="0">
      <TabList>
        <Tab v-for="tab in destinations" :key="tab.value">{{ tab.title }}</Tab>
      </TabList>
      <TabPanels>
        <TabPanel
          v-for="(destination, index) in destinations"
          :key="destination.index"
          :value="destination.value"
        >
        <article v-for="(plan, index) in destination.plans" :key="index">
          {{ plan.name }}
        </article>
      </TabPanel>
      </TabPanels>
    </Tabs>
  </section>
</template>

<script>
export default {
  data() {
    return {
      destinations: [
        {
          value: 0,
          title: "Downtown",
          plans: [
            {
              name: "Connect",
              price: 89,
              intro:
                "Ideal for startups seeking a professional address with occasional workspace access.",
              list: [
                "<p>Prestigious <span class='font-bold'>business address</span></p>",
                "<p><span class='font-bold'>Mail handling</span> services, customized to your needs.</p>",
                "<p><span class='font-bold'>1 Day</span> per month access to the <span class='font-bold'>ICLUB Lounge.</span></p>",
                "<p><span class='font-bold'>5% Discounts</span> on conference rooms, offices, and coworking spaces.</p>",
              ],
              cta: "Start with Connect Plan",
            },
            {
              name: "Grow",
              price: 149,
              intro:
                "Perfect for businesses needing a dedicated phone line and regular workspace use.",
              everything: "Everything in Connect Plan +",
              list: [
                "<p>Dedicated <span class='font-bold'>local phone number</span> for your business.</p>",
                "<p><span class='font-bold'>Bilingual receptionist</span> answers and <span class='font-bold'>forwards calls</span> under your business name.</p>",
                "<p><span class='font-bold'>Personalized voicemail</span> for missed calls.</p>",
                "<p><span class='font-bold'>Voicemail</span> audio sent directly to your <span class='font-bold'>email</span>.</p>",
                "<p><span class='font-bold'>2 Days</span> per month access to the <span class='font-bold'>ICLUB Lounge</span>.</p>",
                "<p><span class='font-bold'>10% Discounts</span> on conference rooms, offices, and coworking spaces.</p>",
              ],
              cta: "Start with Grow Plan",
            },
            {
              name: "Evolve",
              price: 279,
              intro: "Everything in Grow Plan +",
              list: [
                "<p><span class='font-bold'>5 Hours of workspace</span> and meeting room bookings.</p>",
                "<p><span class='font-bold'>3 Days</span> per month access to the <span class='font-bold'>ICLUB Lounge.</span></p>",
                "<p><span class='font-bold'>15% Discounts</span> on conference rooms, offices, and coworking spaces.</p>",
              ],
              cta: "Start with Evolve Plan",
            },
          ],
        },
        {
          value: 1,
          title: "Aventura",
          plans: [
            {
              name: "Connect",
              price: 89,
              intro:
                "Ideal for startups seeking a professional address with occasional workspace access.",
              list: [
                "<p>Prestigious <span class='font-bold'>business address</span></p>",
                "<p><span class='font-bold'>Mail handling</span> services, customized to your needs.</p>",
                "<p><span class='font-bold'>1 Day</span> per month access to the <span class='font-bold'>ICLUB Lounge.</span></p>",
                "<p><span class='font-bold'>5% Discounts</span> on conference rooms, offices, and coworking spaces.</p>",
              ],
              cta: "Start with Connect Plan",
            },
            {
              name: "Grow",
              price: 149,
              intro:
                "Perfect for businesses needing a dedicated phone line and regular workspace use.",
              everything: "Everything in Connect Plan +",
              list: [
                "<p>Dedicated <span class='font-bold'>local phone number</span> for your business.</p>",
                "<p><span class='font-bold'>Bilingual receptionist</span> answers and <span class='font-bold'>forwards calls</span> under your business name.</p>",
                "<p><span class='font-bold'>Personalized voicemail</span> for missed calls.</p>",
                "<p><span class='font-bold'>Voicemail</span> audio sent directly to your <span class='font-bold'>email</span>.</p>",
                "<p><span class='font-bold'>2 Days</span> per month access to the <span class='font-bold'>ICLUB Lounge</span>.</p>",
                "<p><span class='font-bold'>10% Discounts</span> on conference rooms, offices, and coworking spaces.</p>",
              ],
              cta: "Start with Grow Plan",
            },
            {
              name: "Evolve",
              price: 279,
              intro: "Everything in Grow Plan +",
              list: [
                "<p><span class='font-bold'>5 Hours of workspace</span> and meeting room bookings.</p>",
                "<p><span class='font-bold'>3 Days</span> per month access to the <span class='font-bold'>ICLUB Lounge.</span></p>",
                "<p><span class='font-bold'>15% Discounts</span> on conference rooms, offices, and coworking spaces.</p>",
              ],
              cta: "Start with Evolve Plan",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  gap: 1.25rem;
}

section div {
  gap: 0.75rem;
}
</style>
