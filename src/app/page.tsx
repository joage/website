import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-16">
      <div className="flex flex-col gap-6 max-w-3xl">
        <div>
          <h2 className="justify-left text-lg font-bold">Patagonia</h2>
          <h3 className="justify-left text-sm opacity-50">March 2023</h3>
        </div>
        <div className="flex flex-col place-items-center gap-1">
          <Image
            src="/images/frey.jpg"
            alt="frey"
            width={800}
            height={3700}
          />
          <p className="text-sm opacity-50">
            Jagged peaks above Refugio Frey
          </p>
        </div>

        <p className="opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non. Purus semper eget duis at tellus at urna. Fringilla phasellus faucibus scelerisque eleifend. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Vitae tempus quam pellentesque nec nam aliquam sem et. A pellentesque sit amet porttitor eget. Diam ut venenatis tellus in metus. Cursus sit amet dictum sit. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Nisi vitae suscipit tellus mauris a diam maecenas sed. Nisi lacus sed viverra tellus.
        </p>

        <div className="flex flex-col place-items-center gap-1">
          <Image
            src="/images/valley.jpg"
            alt="frey"
            width={800}
            height={3700}
          />
          <p className="text-sm opacity-50">
            Ascending above treeline on the second pass of the day
          </p>
        </div>


        <div className="flex gap-4">
          <div className="flex flex-col place-items-center gap-1">
            <Image
              src="/images/descending.jpg"
              alt="jakob-pass"
              width={400}
              height={3700}
            />
            <p className="text-sm opacity-50">
              Top of the pass, Ayla on the descent to Laguna Jakob
            </p>
          </div>

          <div className="flex flex-col place-items-center gap-1">
            <Image
              src="/images/boulders.jpg"
              alt="frey"
              width={400}
              height={3700}
            />
            <p className="text-sm opacity-50">
              Going down a soul-crushing boulder field
            </p>
          </div>
        </div>

        <div className="flex flex-col place-items-center gap-1">
          <Image
            src="/images/jakob.jpg"
            alt="frey"
            width={800}
            height={3700}
          />
          <p className="text-sm opacity-50">
            Laguna Jakob
          </p>
        </div>

        <div className="flex flex-col place-items-center gap-1">
          <Image
            src="/images/descent.jpg"
            alt="frey"
            width={800}
            height={3700}
          />
          <p className="text-sm opacity-50">
            Lush valley on the hike out
          </p>
        </div>

        <div className="flex flex-col place-items-center gap-1">
          <Image
            src="/images/waterfall.jpg"
            alt="frey"
            width={400}
            height={3700}
          />
        </div>
      </div>
    </main>
  )
}
