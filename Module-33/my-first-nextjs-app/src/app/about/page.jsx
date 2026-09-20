import Image from 'next/image';

export const metadata = {
  title: "About US",
  description: "About us section",
};

const AboutPage = () => {
    return (
        <div>
            <h2>This is About Page</h2>

            <Image src="/eye_image.jpg" width={300} height={300} alt='eye image'></Image>
        </div>
    );
};

export default AboutPage;