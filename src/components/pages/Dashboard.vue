<script setup>
import {
  ChevronDownIcon,
  ExclamationCircleIcon,
  HandThumbUpIcon,
  LightBulbIcon,
  PlusIcon,
} from "@heroicons/vue/24/solid";
import Card from "../ui/Card.vue";
import HeadlineCard from "../common/HeadlineCard.vue";
import TimelineCard from "../common/TimelineCard.vue";
import PartnerSearch from "../common/PartnerSearch.vue";
import TabPills from "../ui/Tabs/TabPills.vue";
import ProgressBar from "../ui/ProgressBar.vue";
import { ref } from "vue";

const activeTab = ref("tab1");

const setActiveTab = (tabTitle) => {
  activeTab.value = tabTitle;
};

const featuredInventionStaticList = [
  {
    id: "featured-invention-1",
    title: "Visual AI Fruit Grading",
    description:
      "By using visual AI technology, we can grade fruits based on their quality and size. This technology can help farmers to increase their productivity and reduce waste.",
    author: "Richard Sembata",
    date: "2021-10-10",
    counterLike: 10,
    tags: ["AI", "Agriculture"],
  },
  {
    id: "featured-invention-2",
    title: "Visual AI Fruit Grading",
    description:
      "By using visual AI technology, we can grade fruits based on their quality and size. This technology can help farmers to increase their productivity and reduce waste.",
    author: "Richard Sembata",
    date: "2021-10-10",
    counterLike: 10,
    tags: ["AI", "Agriculture"],
  },
  {
    id: "featured-invention-3",
    title: "Visual AI Fruit Grading",
    description:
      "By using visual AI technology, we can grade fruits based on their quality and size. This technology can help farmers to increase their productivity and reduce waste.",
    author: "Richard Sembata",
    date: "2021-10-10",
    counterLike: 10,
    tags: ["AI", "Agriculture"],
  },
];

const timelineStaticList = [
  {
    id: "timeline-1",
    user: "Rizky Maulana",
    activities: "Join as collaborator in an idea",
    timelineType: "join",
    url: "#",
    urlText: "Retail Performance Dashboard",
    tags: ["IOT", "Sales"],
  },
  {
    id: "timeline-2",
    user: "Rizky Maulana",
    tags: ["Big Data", "Planning"],
    activities: "Submit new idea",
    url: "#",
    urlText: "Big data technology",
    timelineType: "embedded",
    embed: {
      embedMedia:
        "https://storage.googleapis.com/a1aa/image/fUoKgTH6thjg9bUWe5yeZi62JZBpgeXT3IFT9H1GiK4.jpg",
      embedTitle: "Visual AI Fruit Grading",
      embedMention: "Richard Sembata",
      embedExtraLink: "#",
      embedDescription:
        "By using visual AI technology, we can grade fruits based on their quality and size. This technology can help farmers to increase their productivity and reduce waste.",
      embedUrl: "#",
      embedVoteCounters: 12,
      embedCommentCounters: 12,
      embedRepostCounters: 12,
    },
    voteCounters: 12,
    commentCounters: 12,
    repostCounters: 12,
  },
];

const partnerSearchStaticList = [
  {
    id: "search-1",
    title: "Build an Innovation Team",
    description:
      "We are looking for a team member who has experience in AI and Agriculture",
    imageUrl:
      "https://storage.googleapis.com/a1aa/image/IkX0U3RsqPGMbQq__lrlDW9wPzBPNzsoVaBAni89Waw.jpg",
    url: "#",
  },
  {
    id: "search-2",
    title: "Build an Innovation Team",
    description:
      "We are looking for a team member who has experience in AI and Agriculture",
    imageUrl:
      "https://storage.googleapis.com/a1aa/image/IkX0U3RsqPGMbQq__lrlDW9wPzBPNzsoVaBAni89Waw.jpg",
    url: "#",
  },
];
</script>

<template>
  <div class="bg-gray-100 font-sans">
    <div class="container mx-auto p-4 h-full">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-y-4 lg:gap-4">
        <!-- Left Sidebar -->
        <aside class="space-y-4">
          <Card>
            <div class="flex flex-wrap gap-2">
              <img
                alt="Incubation Batch X image"
                class="h-30 mb-2"
                src="https://storage.googleapis.com/a1aa/image/UFMx-c9cbhsxNBb1GD-uqrbuHt4dguq9oqPVk5vmak4.jpg"
              />
              <div class="flex flex-col gap-2">
                <h2 class="text-lg font-bold mb-2">Incubation Batch X</h2>
                <ProgressBar progress="50" />
                <ProgressBar progress="30" />
              </div>
            </div>
          </Card>
          <Card>
            <div class="flex flex-auto justify-between items-center">
              <h2 class="text-lg font-bold mb-2">My Idea</h2>
              <button
                type="button"
                class="bg-green-500 hover:bg-green-700 hover:cursor-pointer text-white px-4 py-2 rounded mb-2"
              >
                <div class="flex flex-row items-center gap-1">
                  <PlusIcon class="h-5" />
                  <span>Share</span>
                  <ChevronDownIcon class="h-5" />
                </div>
              </button>
            </div>
            <div class="flex flex-col gap-2">
              <button
                class="bg-gray-200 hover:bg-gray-300 hover:cursor-pointer text-black px-4 py-2 rounded hover:font-bold"
              >
                <div class="flex items-center space-x-2">
                  <div class="bg-blue-500 text-white rounded p-1">
                    <LightBulbIcon class="h-5 text-white" />
                  </div>
                  <span> Vinov </span>
                </div>
              </button>
              <button
                class="bg-gray-200 hover:bg-gray-300 hover:cursor-pointer text-black px-4 py-2 rounded hover:font-bold"
              >
                <div class="flex items-center space-x-2">
                  <div class="bg-red-500 text-white rounded p-1">
                    <ExclamationCircleIcon class="h-5 text-white" />
                  </div>
                  <span> Tracking Inventory </span>
                </div>
              </button>
            </div>
          </Card>
          <Card>
            <h2 class="text-lg font-bold mb-2">Coordinator Assignment</h2>
            <button
              class="bg-gray-200 hover:bg-gray-300 hover:cursor-pointer text-black px-4 py-2 rounded w-full text-left hover:font-bold"
            >
              RIIM Startup
            </button>
          </Card>
          <Card>
            <h2 class="text-lg font-bold mb-2">Mentor Assignment</h2>
            <button
              class="bg-gray-200 hover:bg-gray-300 hover:cursor-pointer text-black px-4 py-2 rounded w-full text-left hover:font-bold"
            >
              RIIM Startup
            </button>
          </Card>
        </aside>
        <!-- Main Content -->
        <main class="col-span-2 flex flex-col space-y-4">
          <div class="flex flex-col">
            <div class="flex gap-2">
              <TabPills
                title="Featured Invention "
                :isActive="activeTab === 'tab1'"
                @click="setActiveTab('tab1')"
              />
              <TabPills
                title="Featured Idea / Product "
                :isActive="activeTab === 'tab2'"
                @click="setActiveTab('tab2')"
              />
              <TabPills
                title="Featured Problems "
                :isActive="activeTab === 'tab3'"
                @click="setActiveTab('tab3')"
              />
            </div>
            <div class="-mt-8">
              <Card>
                <div class="flex flex-col items-center gap-2">
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <HeadlineCard
                      v-for="invention in featuredInventionStaticList"
                      :key="invention.id"
                      :title="invention.title"
                      :description="invention.description"
                      :author="invention.author"
                      :date="invention.date"
                      :counterLike="invention.counterLike"
                      :tags="invention.tags"
                    />
                  </div>
                  <button
                    class="text-blue-500 hover:font-bold hover:cursor-pointer w-full"
                  >
                    View More
                  </button>
                </div>
              </Card>
            </div>
          </div>
          <Card>
            <div class="space-y-4">
              <TimelineCard
                v-for="timeline in timelineStaticList"
                :key="timeline.id"
                :user="timeline.user"
                :activities="timeline.activities"
                :timelineType="timeline.timelineType"
                :url="timeline.url"
                :urlText="timeline.urlText"
                :tags="timeline.tags"
                :embed="timeline.embed"
                :voteCounters="timeline.voteCounters"
                :commentCounters="timeline.commentCounters"
                :repostCounters="timeline.repostCounters"
              />
            </div>
          </Card>
        </main>
        <!-- Right Sidebar -->
        <aside class="space-y-4 sticky top-0">
          <div class="bg-white p-4 rounded shadow">
            <h2 class="text-lg font-bold mb-2">Build an Innovation Team</h2>
            <form @submit.prevent="onSubmit" name="search-candidates">
              <input
                v-model="searchCriteria"
                class="border rounded p-2 w-full mb-2"
                placeholder="Type Skill Criteria"
                type="text"
              />
              <button
                type="submit"
                class="bg-blue-500 text-white hover:cursor-pointer px-4 py-2 rounded w-full"
              >
                Search Candidates
              </button>
            </form>
          </div>
          <div class="bg-white p-4 rounded shadow">
            <h2 class="text-lg font-bold mb-2">Innovation Program</h2>
            <div class="flex flex-col gap-10">
              <PartnerSearch
                v-for="partner in partnerSearchStaticList"
                :key="partner.id"
                :title="partner.title"
                :description="partner.description"
                :imageUrl="partner.imageUrl"
                :url="partner.url"
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
