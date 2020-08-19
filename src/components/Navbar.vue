<template>
  <nav>
      <ul>
          <li v-for="(link, index) in links" :key="index">
              <a :href="link.href">{{link.name}}</a>
          </li>
      </ul>
  </nav>
</template>

<script>
export default {
    name: "navbar",
    data() {
        return {
            links: [
                {
                    name: "Hello",
                    href: "/"
                }, 
                {
                    name: "Cat",
                    href: "/cat.html"
                }
            ]
        };
    }
}
</script>

<style>

</style>