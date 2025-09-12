import {
  createBrowserRouter,
  RouterProvider,
  type LoaderFunction,
  type ActionFunction,
} from 'react-router-dom'
import CommonLayout from './components/layout/CommonLayout'
import { StackProvider } from './context/StackContext'
import { RefProvider } from './context/RefContext'
import { DarkModeProvider } from './context/DarkModeContext'
import { ScrollProvider } from './context/ScrollContext'
import { ActiveContentsProvider } from './context/ActiveContents'
import ComponentsWrapper from './components/etc/ComponentsWrapper'
interface RouteCommon {
  loader?: LoaderFunction
  action?: ActionFunction
  ErrorBoundary?: React.ComponentType<unknown>
}

interface IRoute extends RouteCommon {
  path: string
  Element: React.ComponentType<unknown>
}

interface Pages {
  [key: string]: { default: React.ComponentType<unknown> } & RouteCommon
}

const pages: Pages = import.meta.glob('./pages/**/*.tsx', { eager: true })

const routes: IRoute[] = []

for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1]
  if (!fileName) {
    continue
  }

  // 동적 라우팅을 위한 변환
  let normalizedPathName = fileName.replace(/\/page$/, '').toLowerCase()

  if (normalizedPathName.includes('$') || normalizedPathName.includes('[')) {
    normalizedPathName = normalizedPathName
      .replace('$', ':')
      .replace(/\[(.*?)\]/g, ':$1')
  }

  routes.push({
    path: fileName === 'page' ? '/' : `/${normalizedPathName}`,
    Element: pages[path].default,
    loader: pages[path]?.loader as LoaderFunction | undefined,
    action: pages[path]?.action as ActionFunction | undefined,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  })
}

const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: (
      <>
        <CommonLayout>
          <Element />
        </CommonLayout>
      </>
    ),
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
  }))
)

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <ScrollProvider>
          <RefProvider>
            <StackProvider>
              <ActiveContentsProvider>
                <ComponentsWrapper />
                <RouterProvider router={router} />
              </ActiveContentsProvider>
            </StackProvider>
          </RefProvider>
        </ScrollProvider>
      </DarkModeProvider>
    </>
  )
}

export default App
