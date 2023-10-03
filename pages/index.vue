<template>
  <div class="main">
    <div class="header border-bottom-black">
      <v-container>
        <v-row>
          <v-col>
            <div class="font-40 d-flex align-center py-4">
              <p>Follow me for updates on what I am creating.</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="with-sidebar my-15">
      <v-container>
        <v-card
          v-if="$vuetify.breakpoint.width >= 1024"
          class="border-black float-left mr-12"
        >
          <div class="card-block font-14">
            <p>Showing 1-18 of 286 products</p>
          </div>
          <div class="card-block">
            <v-text-field
              label="Search products"
              solo
              hide-details
              flat
              dense
              height="50"
              class="max-width border-black mr-5"
            >
            </v-text-field>
          </div>
          <div class="card-block">
            <p>Sort by</p>
            <v-select
              :items="null"
              solo
              hide-details
              flat
              dense
              label="Outlined style"
              height="50"
              class="max-width border-black mr-5 mt-2"
            ></v-select>
          </div>
          <div class="card-block">
            <p>Minimum price</p>
            <v-text-field
              label="0"
              solo
              hide-details
              flat
              dense
              height="50"
              prefix="$"
              type="number"
              class="max-width border-black mr-5 my-2"
            >
            </v-text-field>
            <p>Maximum price</p>
            <v-text-field
              label="0"
              solo
              hide-details
              flat
              dense
              height="50"
              prefix="$"
              type="number"
              class="max-width border-black mr-5 my-2"
            >
            </v-text-field>
          </div>
          <div class="card-block">
            <p>Rating</p>
            <div class="rating">
              <div class="d-flex align-center">
                <v-rating
                  :value="4"
                  readonly
                  dense
                  small
                  color="black"
                  background-color="black"
                  class="mr-1"
                />
                <span>and up</span>
                <v-spacer></v-spacer>
                <v-checkbox
                  off-icon="mdi-circle-outline"
                  on-icon="mdi-record-circle"
                  dense
                  hide-details
                  class="mr-3 ma-0"
                >
                </v-checkbox>
              </div>
            </div>
            <div class="rating">
              <div class="d-flex align-center">
                <v-rating
                  :value="3"
                  readonly
                  dense
                  small
                  color="black"
                  background-color="black"
                  class="mr-1"
                />
                <span>and up</span>
                <v-spacer></v-spacer>
                <v-checkbox
                  off-icon="mdi-circle-outline"
                  on-icon="mdi-record-circle"
                  dense
                  hide-details
                  class="mr-3 ma-0"
                >
                </v-checkbox>
              </div>
            </div>
            <div class="rating">
              <div class="d-flex align-center">
                <v-rating
                  :value="2"
                  readonly
                  dense
                  small
                  color="black"
                  background-color="black"
                  class="mr-1"
                />
                <span>and up</span>
                <v-spacer></v-spacer>
                <v-checkbox
                  off-icon="mdi-circle-outline"
                  on-icon="mdi-record-circle"
                  dense
                  hide-details
                  class="mr-3 ma-0"
                >
                </v-checkbox>
              </div>
            </div>
            <div class="rating">
              <div class="d-flex align-center">
                <v-rating
                  :value="1"
                  readonly
                  dense
                  small
                  color="black"
                  background-color="black"
                  class="mr-1"
                />
                <span>and up</span>
                <v-spacer></v-spacer>
                <v-checkbox
                  off-icon="mdi-circle-outline"
                  on-icon="mdi-record-circle"
                  dense
                  hide-details
                  class="mr-3 ma-0"
                >
                </v-checkbox>
              </div>
            </div>
          </div>
          <div class="card-block">
            <p>Showing</p>
            <div class="showing">
              <div class="d-flex align-center">
                <span>fanarts (45)</span>
                <v-spacer></v-spacer>
                <v-checkbox
                  off-icon="mdi-circle-outline"
                  on-icon="mdi-record-circle"
                  dense
                  hide-details
                  class="mr-3 ma-0"
                >
                </v-checkbox>
              </div>
            </div>
          </div>
          <div class="card-block">
            <p>Contains</p>
            <div class="showing">
              <div class="d-flex align-center">
                <span>jpg (45)</span>
                <v-spacer></v-spacer>
                <v-checkbox
                  off-icon="mdi-circle-outline"
                  on-icon="mdi-record-circle"
                  dense
                  hide-details
                  class="mr-3 ma-0"
                >
                </v-checkbox>
              </div>
            </div>
          </div>
        </v-card>
        <v-card v-else class="border-black mb-12">
          <div class="card-block font-14 d-flex justify-space-between pr-6">
            <p>Showing 1-18 of 286 products</p>
            <p
              class="text-decoration-underline cursor-pointer"
              @click="toggleFilter = !toggleFilter"
            >
              Filter
            </p>
          </div>
          <div class="filter" v-show="toggleFilter">
            <div class="card-block">
              <v-text-field
                label="Search products"
                solo
                hide-details
                flat
                dense
                height="50"
                class="border-black mr-5"
              >
              </v-text-field>
            </div>
            <div class="card-block">
              <p>Sort by</p>
              <v-select
                :items="null"
                solo
                hide-details
                flat
                dense
                label="Outlined style"
                height="50"
                class="border-black mr-5 mt-2"
              ></v-select>
            </div>
            <div class="card-block">
              <p>Minimum price</p>
              <v-text-field
                label="0"
                solo
                hide-details
                flat
                dense
                height="50"
                prefix="$"
                type="number"
                class="border-black mr-5 my-2"
              >
              </v-text-field>
              <p>Maximum price</p>
              <v-text-field
                label="0"
                solo
                hide-details
                flat
                dense
                height="50"
                prefix="$"
                type="number"
                class="border-black mr-5 my-2"
              >
              </v-text-field>
            </div>
            <div class="card-block">
              <p>Rating</p>
              <div class="rating">
                <div class="d-flex align-center">
                  <v-rating
                    :value="4"
                    readonly
                    dense
                    small
                    color="black"
                    background-color="black"
                    class="mr-1"
                  />
                  <span>and up</span>
                  <v-spacer></v-spacer>
                  <v-checkbox
                    off-icon="mdi-circle-outline"
                    on-icon="mdi-record-circle"
                    dense
                    hide-details
                    class="mr-3 ma-0"
                  >
                  </v-checkbox>
                </div>
              </div>
              <div class="rating">
                <div class="d-flex align-center">
                  <v-rating
                    :value="3"
                    readonly
                    dense
                    small
                    color="black"
                    background-color="black"
                    class="mr-1"
                  />
                  <span>and up</span>
                  <v-spacer></v-spacer>
                  <v-checkbox
                    off-icon="mdi-circle-outline"
                    on-icon="mdi-record-circle"
                    dense
                    hide-details
                    class="mr-3 ma-0"
                  >
                  </v-checkbox>
                </div>
              </div>
              <div class="rating">
                <div class="d-flex align-center">
                  <v-rating
                    :value="2"
                    readonly
                    dense
                    small
                    color="black"
                    background-color="black"
                    class="mr-1"
                  />
                  <span>and up</span>
                  <v-spacer></v-spacer>
                  <v-checkbox
                    off-icon="mdi-circle-outline"
                    on-icon="mdi-record-circle"
                    dense
                    hide-details
                    class="mr-3 ma-0"
                  >
                  </v-checkbox>
                </div>
              </div>
              <div class="rating">
                <div class="d-flex align-center">
                  <v-rating
                    :value="1"
                    readonly
                    dense
                    small
                    color="black"
                    background-color="black"
                    class="mr-1"
                  />
                  <span>and up</span>
                  <v-spacer></v-spacer>
                  <v-checkbox
                    off-icon="mdi-circle-outline"
                    on-icon="mdi-record-circle"
                    dense
                    hide-details
                    class="mr-3 ma-0"
                  >
                  </v-checkbox>
                </div>
              </div>
            </div>
            <div class="card-block">
              <p>Showing</p>
              <div class="showing">
                <div class="d-flex align-center">
                  <span>fanarts (45)</span>
                  <v-spacer></v-spacer>
                  <v-checkbox
                    off-icon="mdi-circle-outline"
                    on-icon="mdi-record-circle"
                    dense
                    hide-details
                    class="mr-3 ma-0"
                  >
                  </v-checkbox>
                </div>
              </div>
            </div>
            <div class="card-block">
              <p>Contains</p>
              <div class="showing">
                <div class="d-flex align-center">
                  <span>jpg (45)</span>
                  <v-spacer></v-spacer>
                  <v-checkbox
                    off-icon="mdi-circle-outline"
                    on-icon="mdi-record-circle"
                    dense
                    hide-details
                    class="mr-3 ma-0"
                  >
                  </v-checkbox>
                </div>
              </div>
            </div>
          </div>
        </v-card>
        <v-row>
          <v-col
            cols="12"
            lg="4"
            md="6"
            sm="6"
            v-for="item in data"
            :key="item._id"
          >
            <v-card class="border-black gumroad-other">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                :height="mobile ? undefined : 256"
              ></v-img>
              <p class="font-20 pl-4 py-5 border-bottom-black">
                {{ item.name }}
              </p>
              <div class="content d-flex justify-space-between">
                <v-col cols="6"> rating </v-col>
                <v-col cols="4" class="border-left-black d-flex justify-center">
                  ${{ item.price }}
                </v-col>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      toggleFilter: false, 
      data: [],
    }
  },
  created() {
    this.getList()
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs
    },
  },
  methods: {
    async getList() {
      try {
        const res = await this.$store.dispatch('gumroad/list')
        this.data = res.data
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
