import Heading from '../atoms/heading';
import Post from '../atoms/post';
import Section2 from '../atoms/section2';
import AllPosts from '../organism/allpost';

export default function AboutPage() {
  return (
    <Section2 isFancy={true}>
        <Heading>Tentang Saya</Heading>
        <Post
        title="Saya adalah"
        body="Capung."
        />
    <AllPosts/>
    </Section2>
  );
}
