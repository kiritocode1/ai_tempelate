
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function BelowHoverComponent() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome to the Future of AI</h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our platform makes AI accessible to everyone. No data science degree required. Whether you are  a developer
              or a business analyst, you can leverage the power of machine learning to make better decisions and build
              smarter applications.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:grid-cols-[1fr_600px] lg:gap-10 xl:grid-cols-[1fr_700px]">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Choose the Right Plan for Your Team</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our flexible pricing options are designed to scale with your business. Whether you  are  a small startup or a
              large enterprise, we have a plan that meets your needs.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 justify-center md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-col p-4">
                <h3 className="text-2xl font-bold">Starter</h3>
                <span className="text-2xl font-bold">$29</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Per user per month</span>
              </CardHeader>
              <CardContent className="grid gap-4 p-4">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-4 w-4" />
                    <span>Unlimited projects</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-4 w-4" />
                    <span>100 GB of storage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-4 w-4" />
                    <span>Custom domains</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center p-4">
                <Button size="sm">Upgrade</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-col p-4">
                <h3 className="text-2xl font-bold">Pro</h3>
                <span className="text-2xl font-bold">$79</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Per user per month</span>
              </CardHeader>
              <CardContent className="grid gap-4 p-4">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-4 w-4" />
                    <span>Unlimited projects</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-4 w-4" />
                    <span>100 GB of storage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-4 w-4" />
                    <span>Custom domains</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center p-4">
                <Button size="sm">Upgrade</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-col p-4">
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <span className="text-2xl font-bold">$149</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Per user per month</span>
              </CardHeader>
              <CardContent className="grid gap-4 p-4">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-4 w-4" />
                    <span>Unlimited projects</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-4 w-4" />
                    <span>100 GB of storage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-4 w-4" />
                    <span>Custom domains</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center p-4">
                <Button size="sm">Contact Sales</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:grid-cols-[1fr_600px] lg:gap-10 xl:grid-cols-[1fr_700px]">

        </div>
      </section>
    </>
  )
}


function CheckCircleIcon({className}:{className:string}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
