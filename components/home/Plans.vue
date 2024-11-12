<template>
  <section class="column">
    <div class="column">
      <h2 class="text-center">Find the right fit</h2>
      <p class="text-center">Where will you base your business?</p>
    </div>
    <Tabs class="plans" :value="0">
      <TabList>
        <Tab v-for="tab in destinations" :key="tab.value" :value="tab.value">
          <div class="tabHeader">
            {{ tab.title }}
          </div>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel
          v-for="(destination, index) in destinations"
          :key="index"
          :value="destination.value"
        >
          <article
            class="w-full"
            :class="`article${index}`"
            v-for="(plan, index) in destination.plans"
            :key="index"
          >
            <div class="planHead column">
              <p>{{ plan.name }}</p>
              <p>
                from <span class="price">${{ plan.price }}</span
                >/month
              </p>
              <p>{{ plan.intro }}</p>
            </div>
            <ul class="planList column">
              <li class="font-bold" v-if="plan.everything">
                {{ plan.everything }}
              </li>
              <ClientOnly>
                <li
                  class="rowCenter"
                  v-for="(item, index) in plan.list"
                  :key="index"
                >
                  <Icon
                    name="mingcute:check-circle-line"
                    class="text-light-blue"
                  />
                  <p v-html="item"></p>
                </li>
              </ClientOnly>
            </ul>
            <div class="flex justify-content-end">
              <NuxtLink :to="routes.GET_STARTED" class="primaryButton">{{
                plan.cta
              }}</NuxtLink>
            </div>
          </article>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </section>
</template>

<script>
import { ROUTE_NAMES } from "~/constants/ROUTE_NAMES";

export default {
  data() {
    return {
      routes: ROUTE_NAMES,
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
                "<p class='listItem'>Prestigious <span class='font-bold'>business address</span></p>",
                "<p class='listItem'><span class='font-bold'>Mail handling</span> services, customized to your needs.</p>",
                "<p class='listItem'><span class='font-bold'>1 Day</span> per month access to the <span class='font-bold'>ICLUB Lounge.</span></p>",
                "<p class='listItem'><span class='font-bold'>5% Discounts</span> on conference rooms, offices, and coworking spaces.</p>",
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
                "<p class='listItem'>Dedicated <span class='font-bold'>local phone number</span> for your business.</p>",
                "<p class='listItem'><span class='font-bold'>Bilingual receptionist</span> answers and <span class='font-bold'>forwards calls</span> under your business name.</p>",
                "<p class='listItem'><span class='font-bold'>Personalized voicemail</span> for missed calls.</p>",
                "<p class='listItem'><span class='font-bold'>Voicemail</span> audio sent directly to your <span class='font-bold'>email</span>.</p>",
                "<p class='listItem'><span class='font-bold'>2 Days</span> per month access to the <span class='font-bold'>ICLUB Lounge</span>.</p>",
                "<p class='listItem'><span class='font-bold'>10% Discounts</span> on conference rooms, offices, and coworking spaces.</p>",
              ],
              cta: "Start with Grow Plan",
            },
            {
              name: "Evolve",
              price: 279,
              intro:
                "Great for established businesses wanting comprehensive support and extra amenities.",
              everything: "Everything in Grow Plan +",
              list: [
                "<p class='listItem'><span class='font-bold'>5 Hours of workspace</span> and meeting room bookings.</p>",
                "<p class='listItem'><span class='font-bold'>3 Days</span> per month access to the <span class='font-bold'>ICLUB Lounge.</span></p>",
                "<p class='listItem'><span class='font-bold'>15% Discounts</span> on conference rooms, offices, and coworking spaces.</p>",
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
                "<p class='listItem'>Prestigious <span class='font-bold'>business address</span></p>",
                "<p class='listItem'><span class='font-bold'>Mail handling</span> services, customized to your needs.</p>",
                "<p class='listItem'><span class='font-bold'>1 Day</span> per month access to the <span class='font-bold'>ICLUB Lounge.</span></p>",
                "<p class='listItem'><span class='font-bold'>5% Discounts</span> on conference rooms, offices, and coworking spaces.</p>",
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
                "<p class='listItem'>Dedicated <span class='font-bold'>local phone number</span> for your business.</p>",
                "<p class='listItem'><span class='font-bold'>Bilingual receptionist</span> answers and <span class='font-bold'>forwards calls</span> under your business name.</p>",
                "<p class='listItem'><span class='font-bold'>Personalized voicemail</span> for missed calls.</p>",
                "<p class='listItem'><span class='font-bold'>Voicemail</span> audio sent directly to your <span class='font-bold'>email</span>.</p>",
                "<p class='listItem'><span class='font-bold'>2 Days</span> per month access to the <span class='font-bold'>ICLUB Lounge</span>.</p>",
                "<p class='listItem'><span class='font-bold'>10% Discounts</span> on conference rooms, offices, and coworking spaces.</p>",
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

<style>
.plans .p-tablist-tab-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
}

.plans .p-tab {
  display: flex;
  justify-content: center;
  border: none;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-dark-gray);
  padding-bottom: 3px;
  transition: all 0.3s ease;
}

.plans .p-tab-active {
  background: var(--gradient-blue);
  color: var(--color-black);
}

.plans .tabHeader {
  background: var(--color-white);
  padding: 0 0.75rem 0.3rem 0.75rem;
}

.plans .p-tab:not(.p-tab-active):not(.p-disabled):hover {
  background: none;
  border: none;
}

.plans .p-tabpanel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.listItem {
  font-size: 0.75rem;
}
</style>

<style scoped>
section {
  gap: 1.25rem;
}

section > div:first-child {
  gap: 0.75rem;
}

section > div:last-child {
  gap: 1.25rem;
}

article {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-white);
  border: 2px solid var(--color-light-gray);
  border-radius: 16px;
  box-shadow: 0px 0px 10px 0px #00000033;
  padding: 1rem;
}

.article1 {
  background: var(--gradient-blue);
}

.article1 p, .article1 li, .article1 span {
  color: var(--color-white) !important;
}

.article1 a {
  background: var(--color-white);
  color: var(--color-mid-blue);
}

.planHead,
.planList {
  gap: 0.375rem;
}

.planHead p:first-of-type,
.planHead .price {
  font-size: 1.25rem;
  font-weight: 700;
}

.planHead p:first-of-type {
  color: var(--color-mid-blue);
}

.planHead p {
  color: var(--color-black);
}

.planHead p:last-of-type {
  font-size: 0.75rem;
  color: var(--color-dark-gray);
}

.planList li {
  gap: 0.35rem;
  font-size: 0.75rem;
}

.planList span {
  width: 10%;
}

.planList p {
  width: 90%;
}
</style>
