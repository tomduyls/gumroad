<template>
  <v-app>
    <v-app-bar
      fixed
      app
      height="98"
      elevation="0"
      class="border-bottom-black"
      :extension-height="mobile ? 98 : null"
    >
      <v-container>
        <v-row class="align-center">
          <v-col class="pl-0">
            <div class="logo d-flex">
              <v-avatar size="30" class="gumroad-other">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-avatar>
              <div class="font-20 color-black ml-3">Gumroad</div>
            </div>
          </v-col>
          <v-col class="pr-0">
            <div class="d-flex justify-end align-center">
              <v-text-field
                v-if="$vuetify.breakpoint.width >= 960"
                label="email@domain.com"
                solo
                hide-details
                flat
                dense
                height="50"
                class="max-width border-black mr-3"
              ></v-text-field>
              <v-btn
                v-if="$vuetify.breakpoint.width >= 960"
                outlined
                min-height="50"
                max-width="105"
                class="mr-9 no-uppercase no-letter-spacing font-16 gumroad"
                >Subscribe</v-btn
              >
              <v-btn
                outlined
                min-height="50"
                min-width="50"
                class="gumroad"
                href="https://twitter.com/"
                target="_blank"
                ><v-icon small>mdi-twitter</v-icon></v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
      <template #extension>
        <v-container v-if="$vuetify.breakpoint.width < 960">
          <v-row>
            <v-text-field
              label="email@domain.com"
              solo
              hide-details
              flat
              dense
              height="50"
              class="border-black mr-3"
            ></v-text-field>
            <v-btn
              outlined
              min-height="50"
              max-width="105"
              class="no-uppercase no-letter-spacing font-16 gumroad"
              >Subscribe</v-btn
            >
          </v-row>
        </v-container>
      </template>
    </v-app-bar>
    <!-- <v-app-bar
      fixed
      elevation="0"
      height="98"
      class="mt-app border-bottom-black"
    >
      <v-container>
        <v-row>
          <v-col>
            <div class="d-flex">
              <v-text-field
                label="email@domain.com"
                solo
                hide-details
                flat
                dense
                height="50"
                class="border-black mr-3"
              ></v-text-field>
              <v-btn
                outlined
                min-height="50"
                max-width="105"
                class="mr-9 no-uppercase no-letter-spacing font-16 gumroad"
                >Subscribe</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar> -->
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer absolute app class="border-top-black">
      <v-container>
        <span>Clone by Dym &copy; {{ new Date().getFullYear() }}</span>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs
    },
  },
}
</script>

<style>
* {
  font-family: MabryPro !important;
}
</style>

<style lang="scss" scoped>
::v-deep .v-toolbar__content {
  border-bottom: 1px solid black !important;
}
</style>
