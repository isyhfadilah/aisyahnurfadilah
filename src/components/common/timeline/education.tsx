import Image from 'next/image'

export const TimeEducation = () => {
  return (
    // masih mepet di mobile
    <ol className="relative border-s border-gray-200">
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-8 ring-white">
          <Image src="/images/smea.png" alt="smkn 2 sumedang" height={80} width={80} />
        </span>

        <time className="block mb-2 text-sm font-normal leading-none text-stoke">Juli 2021 - May 2024</time>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-dark">SMKN 2 Sumedang</h3>
        <p className="mb-4 text-base font-normal text-dark-gray">Software Engineering Major</p>
      </li>
    </ol>
  )
}
