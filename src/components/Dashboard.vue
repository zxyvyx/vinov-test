<script setup lang="ts">
import {
  ExclamationCircleIcon,
  HandThumbUpIcon,
  LightBulbIcon,
} from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="bg-gray-100 font-sans">
    <div class="container mx-auto p-4">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <!-- Left Sidebar -->
        <aside class="space-y-4">
          <div class="bg-white p-4 rounded shadow">
            <h2 class="text-lg font-bold mb-2">Incubation Batch X</h2>
            <img
              alt="Incubation Batch X image"
              class="mb-2"
              height="100"
              src="https://storage.googleapis.com/a1aa/image/UFMx-c9cbhsxNBb1GD-uqrbuHt4dguq9oqPVk5vmak4.jpg"
              width="200"
            />
            <div class="bg-gray-200 h-4 rounded mb-2"></div>
            <div class="bg-gray-200 h-4 rounded"></div>
          </div>
          <div class="bg-white p-4 rounded shadow">
            <h2 class="text-lg font-bold mb-2">My Idea</h2>
            <button class="bg-green-500 text-white px-4 py-2 rounded mb-2">
              Share
            </button>
            <div class="flex items-center space-x-2 mb-2">
              <LightBulbIcon class="text-blue-500" />
              <span> Vinov </span>
            </div>
            <div class="flex items-center space-x-2">
              <ExclamationCircleIcon class="text-red-500" />
              <span> Tracking Inventory </span>
            </div>
          </div>
          <div class="bg-white p-4 rounded shadow">
            <h2 class="text-lg font-bold mb-2">Coordinator Assignment</h2>
            <div class="bg-gray-200 p-2 rounded">RIIM Startup</div>
          </div>
          <div class="bg-white p-4 rounded shadow">
            <h2 class="text-lg font-bold mb-2">Mentor Assignment</h2>
            <div class="bg-gray-200 p-2 rounded">RIIM Startup</div>
          </div>
        </aside>
        <!-- Main Content -->
        <main class="col-span-2 space-y-4">
          <div class="bg-white p-4 rounded shadow">
            <div class="flex space-x-4 mb-4">
              <button class="bg-blue-500 text-white px-4 py-2 rounded">
                Featured Invention
              </button>
              <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded">
                Featured Idea / Product
              </button>
              <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded">
                Featured Problems
              </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="bg-white p-4 rounded shadow">
                <img
                  alt="Visual-AI Fruit Grading"
                  class="mb-2"
                  height="100"
                  src="https://storage.googleapis.com/a1aa/image/fUoKgTH6thjg9bUWe5yeZi62JZBpgeXT3IFT9H1GiK4.jpg"
                  width="200"
                />
                <div class="flex space-x-2 mb-2">
                  <span class="bg-blue-500 text-white px-2 py-1 rounded">
                    AI
                  </span>
                  <span class="bg-green-500 text-white px-2 py-1 rounded">
                    Embedded
                  </span>
                </div>
                <p class="text-gray-600 text-sm">
                  Richard Sembata - 5 Jan 2025
                </p>
                <h3 class="text-lg font-bold">Visual-AI Fruit Grading</h3>
                <p class="text-gray-600 text-sm">
                  Solusi AI-based Fruit Grading yang memanfaatkan pemrosesan
                  citra...
                </p>
                <div class="flex justify-between items-center mt-2">
                  <span class="text-gray-600 text-sm"> 27 </span>
                  <button class="text-blue-500">Read More</button>
                  <HandThumbUpIcon class="text-blue-500" />
                </div>
              </div>
              <div class="bg-white p-4 rounded shadow">
                <img
                  alt="Fruit Sorting Machine"
                  class="mb-2"
                  height="100"
                  src="https://storage.googleapis.com/a1aa/image/LAGonxBbfz3HdXV3aICUoEHZ5iibADrPiq7eV94e114.jpg"
                  width="200"
                />
                <div class="flex space-x-2 mb-2">
                  <span class="bg-green-500 text-white px-2 py-1 rounded">
                    Mekatronik
                  </span>
                </div>
                <p class="text-gray-600 text-sm">Satya Gunawan - 16 Jan 2025</p>
                <h3 class="text-lg font-bold">Fruit Sorting Machine</h3>
                <p class="text-gray-600 text-sm">
                  Solusi untuk memilah buah-buahan berdasarkan dimensinya...
                </p>
                <div class="flex justify-between items-center mt-2">
                  <span class="text-gray-600 text-sm"> 21 </span>
                  <button class="text-blue-500">Read More</button>
                  <HandThumbUpIcon class="text-blue-500" />
                </div>
              </div>
              <div class="bg-white p-4 rounded shadow">
                <img
                  alt="Weight Grading Machine"
                  class="mb-2"
                  height="100"
                  src="https://storage.googleapis.com/a1aa/image/lySDepZ9sLhBUD1SxCzGdOgV3D34T-6YyEKkDw7Np9E.jpg"
                  width="200"
                />
                <div class="flex space-x-2 mb-2">
                  <span class="bg-green-500 text-white px-2 py-1 rounded">
                    Mekatronik
                  </span>
                </div>
                <p class="text-gray-600 text-sm">Robby Trisna - 31 Jan 2025</p>
                <h3 class="text-lg font-bold">Weight Grading Machine</h3>
                <p class="text-gray-600 text-sm">
                  Perangkat untuk memisahkan buah buahan dari berat buah
                  tersebut...
                </p>
                <div class="flex justify-between items-center mt-2">
                  <span class="text-gray-600 text-sm"> 21 </span>
                  <button class="text-blue-500">Read More</button>
                  <HandThumbUpIcon class="text-blue-500" />
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white p-4 rounded shadow">
            <div class="space-y-4">
              <div class="flex items-start space-x-4">
                <img
                  alt="Rizky Maulana"
                  class="rounded-full"
                  height="50"
                  src="https://storage.googleapis.com/a1aa/image/5txVYDBwx56JCOK88SuxYp4lCntMRm-C_mNGeAU9Zfk.jpg"
                  width="50"
                />
                <div>
                  <div class="flex items-center space-x-2">
                    <span class="font-bold"> Rizky Maulana </span>
                    <span class="bg-gray-200 text-gray-700 px-2 py-1 rounded">
                      IOT
                    </span>
                    <span class="bg-gray-200 text-gray-700 px-2 py-1 rounded">
                      Sales
                    </span>
                  </div>
                  <p>
                    Join as collaborator in an idea
                    <a class="text-blue-500" href="#">
                      "Retail performance dashboard"
                    </a>
                  </p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <img
                  alt="Gita Fitri"
                  class="rounded-full"
                  height="50"
                  src="https://storage.googleapis.com/a1aa/image/sA3_WEHzmroMl6xHAXprdRjWYyVLGWPojX7fovmpOR4.jpg"
                  width="50"
                />
                <div>
                  <div class="flex items-center space-x-2">
                    <span class="font-bold"> Gita Fitri </span>
                    <span class="bg-gray-200 text-gray-700 px-2 py-1 rounded">
                      Big Data
                    </span>
                    <span class="bg-gray-200 text-gray-700 px-2 py-1 rounded">
                      Planning
                    </span>
                  </div>
                  <p>
                    Submit new idea
                    <a class="text-blue-500" href="#">
                      "Big data technology for merchandise distribution"
                    </a>
                  </p>
                  <p class="text-gray-600 text-sm">
                    By analyzing large amounts of historical sales data, big
                    data algorithms can identify patterns and trends that help
                    retailers predict future demand for their products. This can
                    help...
                    <a class="text-blue-500" href="#"> read more </a>
                  </p>
                  <div class="flex items-center space-x-4 mt-2">
                    <span class="text-gray-600 text-sm"> 12 </span>
                    <button class="text-blue-500">Comment</button>
                    <button class="text-blue-500">Vote</button>
                    <button class="text-blue-500">Repost</button>
                  </div>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <img
                  alt="Derry Ganda"
                  class="rounded-full"
                  height="50"
                  src="https://storage.googleapis.com/a1aa/image/HlQRaxcgmEMyU6u8w3ghfHSqn2638B5CL4oiaNLJBwE.jpg"
                  width="50"
                />
                <div>
                  <div class="flex items-center space-x-2">
                    <span class="font-bold"> Derry Ganda </span>
                    <span class="bg-gray-200 text-gray-700 px-2 py-1 rounded">
                      Distribution
                    </span>
                  </div>
                  <p>
                    Submit a solution to a problem from
                    <a class="text-blue-500" href="#"> Rizka Kurniawati </a>
                    -
                    <a class="text-blue-500" href="#">
                      "Fraudulent Transaction in Branch Outlet"
                    </a>
                  </p>
                  <p class="text-gray-600 text-sm">
                    Preventing fraudulent transactions in a retail shop requires
                    a combination of policies, procedures, and tools. From the
                    policies and procedures side, some of the most important
                    aspects are includes...
                    <a class="text-blue-500" href="#"> read more </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <!-- Right Sidebar -->
        <aside class="space-y-4">
          <div class="bg-white p-4 rounded shadow">
            <h2 class="text-lg font-bold mb-2">Build an Innovation Team</h2>
            <input
              class="border rounded p-2 w-full mb-2"
              placeholder="Type Skill Criteria"
              type="text"
            />
            <button class="bg-blue-500 text-white px-4 py-2 rounded w-full">
              Search Candidates
            </button>
          </div>
          <div class="bg-white p-4 rounded shadow">
            <h2 class="text-lg font-bold mb-2">Innovation Program</h2>
            <img
              alt="Innovation Program image"
              class="mb-2"
              height="100"
              src="https://storage.googleapis.com/a1aa/image/IkX0U3RsqPGMbQq__lrlDW9wPzBPNzsoVaBAni89Waw.jpg"
              width="200"
            />
            <p class="text-gray-600 text-sm">
              New Product Offers for Small Business
            </p>
            <p class="text-gray-600 text-sm">
              Submit your idea to win Rp. 500 million prize and special
              recognition from BoD
            </p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded w-full">
              Join This Program
            </button>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
