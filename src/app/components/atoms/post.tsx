import Section2 from "./section2";
import Heading from "./heading";

export default function Post({ title, body }: {title: string,  body:  string}) {
  return (
    <div>
      <Section2 isFancy={true}>
       <Heading>
            {title}
       </Heading>
       <p><i>{body}</i></p>
      </Section2>
    </div>
  );
}
