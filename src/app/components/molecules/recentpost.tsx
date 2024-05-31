import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function RecentPost(){
    return(
        <Section2 isFancy={true}>
            <Heading>Recent Posts</Heading> 
            <Post
                title="Cita Rasa Lisbon"
                body="...those pasteis de nata!"
                />
                <Post
                    title="Buenos Aires dalam irama tango"
                    body="Saya menyukainya!"
                    />
        </Section2>

    )
}