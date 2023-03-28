<template>
  <LandingPageNavigationComponent :scrolled="scrolled"/>
  <HomeSection />

  <div class="content-landing pt-16">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci reiciendis minus quo libero minima vel eligendi inventore harum neque possimus placeat porro earum quod maiores ipsum, suscipit consequatur nulla nisi tenetur obcaecati sit quaerat praesentium! Ipsam at quia maiores soluta eius facilis nesciunt quod tempore labore. Debitis omnis rem obcaecati, nihil dignissimos voluptatem architecto neque deserunt quasi voluptate consequatur maxime est aspernatur! Voluptas temporibus ipsum dolores laborum laboriosam dignissimos ad earum distinctio, nemo doloribus! Aperiam quo iste saepe ex necessitatibus vel repellendus ipsum sit exercitationem! Harum provident rem vitae repellat quis quidem commodi odio, a culpa quod praesentium nemo adipisci numquam dicta molestias, alias deleniti amet fugit! Placeat quam consequuntur praesentium dignissimos? Veritatis molestiae soluta ullam animi quam dolores itaque vel! Consequatur, necessitatibus? Voluptatum esse libero expedita tempora ea, reiciendis maxime modi numquam voluptatibus quo sit consectetur error delectus consequatur rerum laudantium pariatur quae voluptatem harum est odit quibusdam eum tempore laborum. Ullam minima tempora possimus officia! Deleniti est officiis quibusdam nemo obcaecati, hic quae reiciendis illo sint, omnis, laborum iure placeat laboriosam eos blanditiis unde minima quas. Minima, obcaecati quis culpa distinctio nulla nihil natus tempore. Tempore sunt deleniti in nesciunt architecto nostrum corporis, laboriosam officia saepe labore velit sit ea maiores totam inventore dolorem ullam ad sed asperiores distinctio nulla doloribus! Obcaecati fugiat repellat odit perspiciatis error, tempora saepe alias, distinctio explicabo, corporis nisi magnam quidem quae unde aspernatur voluptas voluptatum eaque ab commodi. Inventore porro hic maiores voluptas dicta, amet a dolore nulla aliquid sed quos quia optio voluptatum tempora odit veritatis deserunt temporibus omnis! Culpa optio harum error impedit pariatur doloribus tenetur maiores fugiat, esse provident, nihil doloremque perspiciatis nobis similique laudantium quae enim ex. Error possimus quidem aliquid voluptatem officia suscipit, ducimus cupiditate recusandae placeat, perspiciatis hic cumque voluptatum tempora. Magnam aspernatur quibusdam vitae optio.
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import LandingPageNavigationComponent from '@/components/LandingPage/LandingPageNavigationComponent.vue';
import HomeSection from '@/components/LandingPage/HomeSection.vue';

const scrolled = ref(false)

onMounted( () => {
  window.onscroll = () => scrolled.value = document.documentElement.scrollTop > 0;
});


</script>


<style>
.v-main {
  background-image: url("src/assets/bgMain.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

.content-landing{
  min-height: 2000px;
  background: #ad5389;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #3c1053, #ad5389);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #3c1053, #ad5389); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>

