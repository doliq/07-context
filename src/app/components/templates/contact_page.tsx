import Heading from '../atoms/heading';
import Post from '../atoms/post';
import Section2 from '../atoms/section2';
import AllPosts from '../organism/allpost';

export default function ContactPage() {
  return (
    <Section2 isFancy={true}>
        <Heading>Kontak Saya</Heading>
        <Post
        title="Kontak"
        body="911"
        />
    <AllPosts/>
    </Section2>
  );
}
