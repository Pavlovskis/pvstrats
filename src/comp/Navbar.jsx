
export default function Navbar() {
  return (
    <nav class="flex justify-between">
      <div class="px-8 py-6">
        PV Strats.

      </div>

      <div class="font-semibold">
        <div class="sm:hidden">
          <button class="px-8 py-6 flex">
            <span class="mr-2">
              Options
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd" d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <div class="hidden sm:flex">
          <div class="nav-box">
            Something
          </div>
          <div class="nav-box">
            Something
          </div>
          <div class="nav-box">
            Something
          </div>
        </div>
      </div>

    </nav>
  )
}
