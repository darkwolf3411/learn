import { About } from "@/Pages/About"
import { App } from "@/components/App"
import { Suspense } from "react"
import { createHashRouter } from "react-router-dom"

const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/about",
          element: (
            <Suspense fallback={"loading..."}>
              <About />
            </Suspense>
          ),
        },
      ],
    },
  ]

export const router = createHashRouter(routes)

export default routes