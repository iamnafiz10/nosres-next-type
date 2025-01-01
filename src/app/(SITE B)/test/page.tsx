"use client";
import React, {useEffect, useState} from 'react';
import '@/app/globals.css';
import PulseLoader from "@/app/PulseLoader";

const Page = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000); // Show loader for 1 second

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    {showLoader && (
                        <PulseLoader
                            colors={['#263F5C', '#3A5F8A', '#4D7FB8', '#263F5C', '#3A5F8A']}
                            size={12} // Adjust size if needed
                            loading={true}
                            duration={1000} // Adjust duration if needed
                        />
                    )}
                    {!showLoader && (
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci commodi cumque dolor
                            incidunt itaque libero maiores maxime modi molestiae odio odit officiis quaerat, quibusdam,
                            recusandae sunt suscipit velit veritatis! Ab aliquam commodi culpa debitis doloremque
                            ducimus earum eius et ex illum itaque maiores obcaecati, odit officia optio, perferendis
                            quibusdam, quod similique suscipit tempora tempore voluptas voluptatem. A asperiores beatae
                            praesentium quibusdam totam velit? Aliquid assumenda ducimus ea eius fuga, nemo provident ut
                            veritatis voluptatem. Autem beatae culpa debitis dicta doloremque esse est eum ex,
                            exercitationem expedita facilis fuga fugiat id ipsam laboriosam mollitia odit, perspiciatis
                            quae quibusdam quidem quo quod reiciendis repellendus repudiandae tenetur ullam vitae
                            voluptas voluptatem voluptates voluptatum. Aliquam at commodi dolores eveniet libero magni
                            quibusdam sunt tempora temporibus tenetur! Ab at delectus deserunt expedita labore
                            laboriosam tenetur unde voluptates. Accusantium ad alias amet assumenda blanditiis
                            consectetur dolor dolores eos esse eveniet exercitationem expedita fuga ipsa, iure mollitia
                            nihil nobis nulla, officia officiis placeat quaerat quam quo reiciendis rem saepe soluta
                            tempore totam unde, vitae voluptas. A, assumenda, dolore eaque eius, error exercitationem
                            fuga mollitia quae quam qui quos repellat sed sint temporibus voluptas. A alias aperiam
                            aspernatur atque autem delectus, eaque enim fugiat, itaque magnam molestias nisi optio
                            pariatur perspiciatis quod quos rem soluta temporibus unde, voluptatibus? Commodi
                            consectetur dignissimos ea exercitationem fugiat, ipsam magnam molestiae natus nemo nesciunt
                            nihil numquam porro quaerat quibusdam quidem reiciendis sed veritatis voluptate voluptatibus
                            voluptatum? Ab aspernatur laboriosam molestiae pariatur possimus? Ab at autem cum debitis
                            distinctio ducimus earum enim est ex, hic iure maiores nostrum omnis qui quidem quos
                            repudiandae soluta vero. Adipisci aliquam atque corporis cumque debitis deleniti distinctio
                            dolor dolorum earum eos esse eveniet ex facere illum libero magni necessitatibus nobis nulla
                            obcaecati officia pariatur possimus qui quo rem sapiente temporibus, voluptatem voluptates!
                            Aperiam, et impedit labore magni maxime perspiciatis voluptate voluptatibus! Alias ducimus
                            enim odit tenetur. Architecto dolore ea explicabo in magnam maxime minima necessitatibus
                            optio rem, reprehenderit, rerum temporibus voluptatibus voluptatum. Ab ad aliquam asperiores
                            blanditiis culpa debitis dignissimos dolor dolores est eum illo itaque nam nemo, nobis optio
                            possimus reprehenderit veritatis voluptatem. Eos quia ullam voluptatibus. Accusamus amet
                            aspernatur, delectus deleniti distinctio dolores dolorum eaque est incidunt laboriosam
                            laborum maxime natus omnis pariatur perspiciatis placeat quidem rerum, sequi soluta
                            voluptatibus! Illum in obcaecati voluptate. Ad autem cumque ex explicabo, harum iste
                            molestiae non provident quasi unde! Aspernatur cum eius iure, repellat soluta tempora?
                            Blanditiis dolorem facere fuga magni molestias, quidem similique soluta. Commodi eaque error
                            natus omnis optio quasi repudiandae sapiente similique sit temporibus! Doloremque enim modi
                            quas sunt! Animi architecto assumenda atque autem, corporis cum delectus doloribus eius
                            error et, ex, expedita facere incidunt laboriosam laudantium magnam magni maxime minima nam
                            officiis placeat quas quasi quos saepe sapiente sint tempore temporibus ut voluptas
                            voluptatem? A adipisci at consequuntur, cum eveniet iste labore, minima perferendis,
                            possimus quis repudiandae rerum sequi vero! Accusantium dolorem id minus voluptatem? Dolore
                            nesciunt omnis quo voluptatibus. Ad consectetur doloribus earum exercitationem fugiat id,
                            illo, illum ipsam minima minus nulla officiis possimus quaerat quibusdam ratione recusandae
                            sequi sunt, vel velit veritatis! Ab accusantium asperiores aspernatur blanditiis, delectus
                            exercitationem illum laboriosam magnam maxime minima nam nihil numquam porro quibusdam quis
                            quo, recusandae rem tempora veritatis voluptatum? Aliquam aspernatur atque aut autem
                            consectetur cum dignissimos dolorem doloremque doloribus ea, earum eius enim esse facere
                            fuga fugit illo itaque libero maxime modi nesciunt nostrum porro quasi quos reiciendis
                            reprehenderit saepe totam vero, voluptatem voluptatibus. Animi cupiditate eaque facere, fuga
                            in maxime nihil non praesentium quia, sequi totam, voluptates. Laborum nesciunt quidem
                            voluptatibus. Accusamus atque autem iste sapiente totam. Ad aperiam commodi cum ducimus
                            expedita facere, fugit iusto laboriosam molestias nemo odit pariatur, perferendis vero? A,
                            ab aliquam aperiam atque cum debitis distinctio dolor dolore doloremque eligendi esse
                            expedita in itaque, iusto laborum modi molestiae mollitia nam, necessitatibus non nostrum
                            nulla officiis pariatur perferendis perspiciatis placeat quasi quisquam reprehenderit
                            sapiente sint sit sunt tenetur totam ullam vero voluptas voluptates! Alias corporis
                            cupiditate doloribus ducimus eum ipsa possimus quae unde! A accusamus beatae corporis
                            deleniti distinctio, dolorum eligendi eum excepturi facilis illo quia reiciendis repellat
                            rerum saepe sed sunt tempora vel veritatis vero voluptate. Eos facere nisi odit omnis
                            quisquam! Accusantium at atque beatae consequatur cum delectus dolor dolorem ducimus ea esse
                            exercitationem fugit hic illum incidunt inventore, ipsum iure minima modi natus nemo non
                            numquam odio officiis placeat quaerat quam quidem quod reiciendis rerum sequi vel vitae
                            voluptates voluptatibus. Dicta distinctio et minima optio! Architecto corporis distinctio
                            dolor excepturi expedita iure maxime nesciunt nihil officiis pariatur, qui quidem quisquam,
                            sed sunt unde. Adipisci eum hic porro quia ratione tenetur? Alias blanditiis commodi cum eos
                            exercitationem facilis fugiat neque nisi non nostrum placeat quia, reiciendis saepe unde
                            voluptatum. Consequuntur cum, deleniti dicta ducimus esse fugiat fugit laborum minima natus
                            necessitatibus nihil placeat quo repellendus rerum sit, soluta tempore veritatis voluptas!
                            Eos eum exercitationem expedita fugit nulla omnis quos soluta. Alias blanditiis commodi
                            debitis doloremque doloribus excepturi, laborum, minima molestiae nulla, obcaecati quod
                            reiciendis repellat repellendus reprehenderit voluptates. Consequuntur dolor dolorum in
                            ipsam itaque minima quae reiciendis voluptatibus. Corporis debitis dicta, minus omnis
                            placeat quas! Cum incidunt non quisquam sed sunt, tempora. Delectus dolores enim eos et, ex
                            fugit hic in itaque mollitia neque numquam provident quaerat quasi quia, quidem quod rem,
                            saepe sunt. Accusantium adipisci aperiam asperiores cum cupiditate delectus dignissimos enim
                            eos id maiores mollitia nostrum pariatur, quam quibusdam repellat saepe sequi veniam
                            voluptate? Alias, cupiditate eum ex illo iste iure nobis odio provident quas reprehenderit
                            sit sunt unde! Accusamus aliquam aliquid, architecto asperiores aspernatur consequuntur
                            deleniti dolorem eaque eius esse eum, incidunt itaque laborum magni minus mollitia nulla
                            odit officia possimus quaerat quas quibusdam ratione temporibus unde veniam, veritatis
                            voluptatum. Autem dolores odio totam! Facere inventore iure modi pariatur totam? Blanditiis
                            cumque dolor dolorum excepturi in modi omnis rem soluta. Assumenda blanditiis doloremque
                            doloribus dolorum ex fuga illum ipsum, labore nisi officia omnis placeat quasi quisquam
                            reiciendis saepe sint voluptatum. Ad autem, deleniti, ea fugiat incidunt itaque iure nobis
                            omnis, praesentium repudiandae sit voluptas.
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Page;