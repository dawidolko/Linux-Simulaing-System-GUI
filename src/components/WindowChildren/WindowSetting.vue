<template>
  <Window :uuid='uuid' :startpos_x="startpos_x" :startpos_y="startpos_y" :zindex="zindex"  :minimized="minimized">
    <template v-slot:header>
      <div class="tw-flex tw-items-center tw-select-none" style="pointer-events:none;"> 
        <img src="../../assets/images/icons/settings.png" alt="" style="pointer-events:auto;" class=" tw-w-7 tw-h-7 tw-ml-4">
        <div class=" tw-ml-4 tw-font-bold tw-tracking-wider" style="pointer-events:auto;"> About </div>
      </div>
    </template>
    <template v-slot:content>
      <div class=" tw-w-full  tw-h-full tw-rounded-b-2xl tw-overflow-hidden tw-flex
       tw-select-none" @contextmenu.prevent="mr_clicked">
        <div class=" tw-w-52 tw-bg-white tw-h-full tw-flex tw-flex-col tw-px-3 tw-py-2 tw-flex-none" >
          <WindowSettingIcon :tag="'Profile'" :img="'profile'" :selected_tag="selected_tag" @click.native="{selected_tag = 'Profile';selected_tag_2 = 'About Me'}"/>
          <WindowSettingIcon :tag="'Resume'" :img="'paint'" :selected_tag="selected_tag"  @click.native="selected_tag = 'Resume'"/>
        </div>
        <div class=" tw-flex-grow tw-h-full  tw-p-2">
          <div class="tw-w-full tw-h-full  tw-flex">
            <div class="tw-w-48 tw-flex-none tw-rounded-xl tw-bg-white tw-p-2">
              <div class="tw-w-full tw-h-full" v-if="selected_tag === 'Profile'">
                <WindowSettingIcon :tag="'About Me'" :mdi="'beaker-question'" :selected_tag="selected_tag_2"  @click.native="selected_tag_2 = 'About Me'"/>
                <WindowSettingIcon :tag="'Github Stats'" :mdi="'card-account-details-star'" :selected_tag="selected_tag_2"  @click.native="selected_tag_2 = 'Github Stats'"/>
                <WindowSettingIcon :tag="'Credits'" :mdi="'card-account-details-star'" :selected_tag="selected_tag_2"  @click.native="selected_tag_2 = 'Credits'"/>
              </div>
            </div>
            <div class="vl"></div>
            <div class="tw-flex-grow tw-bg-white tw-h-full">
              <div class=" tw-w-full tw-h-full" v-if="selected_tag === 'Profile'">
                <div class="tw-w-full tw-h-full tw-flex tw-flex-col tw-p-6 tw-overflow-auto tw-text-left" style="user-select:text" v-if="selected_tag_2 ==='Credits'">
                  <div class="tw-text-xl tw-font-bold tw-mb-3">Credits &amp; License</div>
                  <p class="tw-mb-3">Based on <a class="tw-underline" href="https://github.com/GoodManWEN/GoodManWEN.github.io" target="_blank" rel="noopener noreferrer">GoodManWEN.github.io</a> by <a class="tw-underline" href="https://github.com/GoodManWEN" target="_blank" rel="noopener noreferrer">GoodManWEN</a>. Copyright (C) 2021 GoodManWEN.</p>
                  <p class="tw-mb-3">Modified by Dawid Olko since 2024. The changes are listed in the <a class="tw-underline" href="https://github.com/dawidolko/Linux-Simulaing-System-GUI#-changes-from-the-original" target="_blank" rel="noopener noreferrer">README</a>.</p>
                  <p class="tw-mb-3">This program is free software: you can redistribute it and modify it under the terms of the <a class="tw-underline" href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" rel="noopener noreferrer">GNU Affero General Public License, version 3</a>. It comes with ABSOLUTELY NO WARRANTY.</p>
                  <p class="tw-mb-3">Source code of this site: <a class="tw-underline" href="https://github.com/dawidolko/Linux-Simulaing-System-GUI" target="_blank" rel="noopener noreferrer">github.com/dawidolko/Linux-Simulaing-System-GUI</a>.</p>
                  <p>Not affiliated with Deepin. Interface imitation for portfolio purposes.</p>
                </div>
                <div ref="overall_page" class="tw-w-full tw-h-full tw-items-center tw-flex tw-flex-col" style="text-align:center" v-if="selected_tag_2 ==='About Me'">
                  <div class=" tw-w-20 tw-h-20 tw-rounded-full tw-overflow-hidden tw-mt-16">
                    <img src="../../assets/images/dawidolko.jpg" alt="Dawid Olko">
                  </div>
                  <div class="tw-mt-3 tw-text-gray-400">Dawid Olko</div>
                  <div class="tw-text-xl tw-mt-2 tw-tracking-wide tw-px-6"> Fullstack / AI Developer from Rzeszów, Poland.</div>
                  <div class="tw-text-lg tw-mt-2 tw-tracking-wide tw-px-6"> BEng in Computer Science from the University of Rzeszów, MSc in progress. I build web applications end to end and tools for working with AI coding agents, and I'm a co-creator of <a class="tw-underline" href="https://skribly.pl" target="_blank" rel="noopener noreferrer">Skribly</a>.</div>
                </div>
                <div ref="github_page" class="tw-w-full tw-h-full tw-items-center tw-flex tw-flex-col tw-justify-center" style="text-align:center" v-if="selected_tag_2 ==='Github Stats'">
                  <img src="https://github-readme-stats.vercel.app/api?username=dawidolko&show_icons=true&line_height=24" alt="" class="tw-w-140 tw-h-40">
                  <img src="https://github-readme-stats.vercel.app/api/top-langs?username=dawidolko" alt="" class="tw-mt-6  tw-w-120 tw-h-72">
                </div>
              </div>
              <div class="tw-w-full tw-h-full" v-if="selected_tag === 'Resume'">
                <div ref="overall_page" class="tw-w-full tw-h-full tw-items-center tw-flex tw-flex-col tw-justify-center" style="text-align:center">
                  <div class="tw-text-4xl tw-mt-2 tw-tracking-wider"> Coming Soon </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </template>
  </Window>
</template>

<script>
import Window from '../WindowBasic/Window.vue'
import WindowSettingIcon from './WindowSettingIcon.vue'

export default {
  name: 'WindowSettings',
  components: {
    Window,
    WindowSettingIcon,
  },
  data(){
    return {
      selected_tag:"Profile",
      selected_tag_2:"Credits",
    }
  },
  props:{
    uuid:String,
    startpos_x:{
      default:60,
    },
    startpos_y:{
      default:60
    },
    zindex:{
      type:Number,
      default:999,
    },
    minimized:{
      type:Boolean,
      default:false,
    },
    default_width:{
      type:Number,
      default:680
    }
  },
  created(){
  },
  mounted(){
    
  },
  watch:{
  },
  computed:{
  },
  methods:{
    mr_clicked(){
      this.$store.commit('show_context_menu')
    }
  }
}
</script>

<style scoped>
.vl {
  border-left: 1.5px solid rgba(244,244,244);
  height: 100%;
  left: 50%;
}
</style>
