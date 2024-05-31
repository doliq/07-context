import Heading from '../atoms/heading';
import Post from '../atoms/post';
import Section2 from '../atoms/section2';
import AllPosts from '../organism/allpost';

export default function ProfilePage() {
    return (
        <Section2 isFancy={true}>
            <Heading>Profil Saya - Nama: Diwa Arsyad Atthoriq, NIM: 2141720222</Heading>
            <Post
                title="Hello Traveller"
                body="Baca tentang petualangan Saya."
            />
            <AllPosts />
        </Section2>
    );
}
