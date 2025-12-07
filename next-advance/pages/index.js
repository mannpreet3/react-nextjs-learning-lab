import MeetupList from "@/components/meetups/MeetupList"
const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Meet 1',
    image: 'http://localhost:3000/amazon-river.jpg',
    address: 'Some address 5',
    description: 'Test Test'
  },
  {
    id: 'm2',
    title: 'Meet 2',
    image: 'http://localhost:3000/amazon-river.jpg',
    address: 'Some address 5',
    description: 'Test Test'
  },
  {
    id: 'm3',
    title: 'Meet 3',
    image: 'http://localhost:3000/amazon-river.jpg',
    address: 'Some address 5',
    description: 'Test Test'
  }
]

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
  }
}
// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     },
//     revalidate: 1
//   }
// }
export default function HomePage(props) {
  return (
    <MeetupList meetups={props.meetups} />
  )
}