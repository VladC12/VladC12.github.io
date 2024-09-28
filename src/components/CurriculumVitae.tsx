import "./CurriculumVitae.css";

const CurriculumVitae: React.FC = () => {
    return (
        <div className="cv-container">
            <div>
                <h1>Crehul Vlad</h1>
                <p>I am a software engineer with a passion for all things technology: software, hardware, electronics, and
                    artificial intelligence. Now with a focus on web development.</p>
                <h2>Experience</h2>
                <ul>
                    <li>
                        <h3>09/2021 - ##/2024</h3>
                        <h3>SOFTWARE ENGINEER, SC Artificial Intelligence Visual Analytics SRL</h3>
                        <p>
                            Worked mostly alone on multiple projects, some for internal use only and some to be used by
                            clients. Most of the work was focused on web development using React and NodeJS. Another
                            part of the work there was in Synthetic Data Generation with Blender and Python and 3D
                            modeling.
                        </p>
                        <h2>Projects</h2>
                        <ul>
                            <li>
                                <h3>Cradle</h3>
                                <p>Written in python, this application ingests RTSP streams from one or more sources, performing real-time inference on the video frames using a machine learning model. The inference results are then packaged into analytical payloads, which can include people detection data and other insights. This tool is designed for use in surveillance systems, traffic monitoring setups, and other scenarios where real-time video analysis can provide valuable insights.</p>
                            </li>
                            <li>
                                <h3>Quartermaster</h3>
                                <p>One of the internal tools developed for AiVA was created using NextJS. Its purpose was to assist
                                    in organizing stored dataset materials by allowing mass uploads of files in a specific directory
                                    structure while handling upload chunking. It also catered to special cases such as organizing 3D
                                    model files that had texture files in folders. Videos, images, and 3D models could be viewed directly in the browser.
                                    To prevent file duplication, all files were stored in a shared folder, with the file structure visible in
                                    the browser based on links from JSON files.
                                    Upon selecting a folder or file(s), users could request to download them in an archive while
                                    maintaining the file structure. Options to download immediately or use a time-limited link were
                                    also available.</p>
                            </li>
                            <li>
                                <h3>Caster</h3>
                                <p>One of the internal tools developed for AiVA was created using NextJS. Its purpose was to assist
                                    in organizing stored dataset materials by allowing mass uploads of files in a specific directory
                                    structure while handling upload chunking. It also catered to special cases such as organizing 3D
                                    model files that had texture files in folders.</p>
                            </li>
                            <li>
                                <h3>Event Manager</h3>
                                <p>One of the projects meant for client-use. It is created in NextJS. It is meant to visualize different
                                    events that can happen at a checkout counter such as item scanning fraud.
                                    It shows a detailed table that can be filtered based on multiple factors.
                                    You can create users which have different limitations.</p>
                            </li>
                            <li>
                                <h3>Event Watcher</h3>
                                <p>Another project for client-use. It was made with Electron and React. It’s a desktop app that allows
                                    the user to be notified in real-time of item fraud at the checkout counter. Users can view a ~5
                                    second video of the event, along with the SKU barcode, price, and timestamp. Associated with it
                                    there is Event Watcher Buddy which allows to manage the users. The user system is similar to
                                    Event Manager.
                                    Buddy is also used to keep track of the app version and enable users to download updates.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>07/2018 - 09/2018</h3>
                        <h3>INTERN SOFTWARE DEVELOPER, SC Continental Automotive Systems SRL</h3>
                        <p>
                            Participated at an internship organized by Continental where I developed software and did basic
                            electronics in a team of four people, for prototype devices.
                        </p>
                        <h2>Projects</h2>
                        <ul>
                            <li>
                                <h3>Internship Project</h3>
                                <p>The main project done during the internship was writing software for an electric ATV which used
                                    custom drivers created by them. The 4 drivers were controlled through and Arduino communicating to them via CAN.</p>
                                <a>https://github.com/VladC12/CONTIMOBIL-2018</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>06/2016 - 08/2016</h3>
                        <h3>Computer Equipment Operator, Genius SRL</h3>
                        <p>Assembled and diagnosed personal computers for customers. Also assisted at selling computer
                            hardware and software and helped customers purchase electronic devices and other software.</p>
                    </li>
                </ul>
                <h2>Education</h2>
                <ul>
                    <li>
                        <h3>06/2021</h3>
                        <h3>Bachelor of Engineeering, UTCN, Faculty of Electronics, Telecommunications and Technology Information</h3>
                        <p>Telecommunication Technologies and System specialization.</p>
                        <h2>Projects</h2>
                        <ul>
                            <li>
                                <h3>Bachelor Thesis: Tacotron 2 DNN Text-To-Speech Web App</h3>
                                <p>My bachelor thesis project involved implementing a version of Tacotron 2 and training two
                                    models: one in Romanian using the Mara Corpus, which contains the audiobook "Mara", and
                                    another in English using the publicly available LJSpeech Dataset. Additionally, a web interface was
                                    developed using Flask to accompany the two models.</p>
                            </li>
                            <li>
                                <h3>IOT Modbus Monitor</h3>
                                <p>As a university project, my team of three was tasked with retrieving and parsing data from a
                                    Modbus and displaying it in a web interface. We accomplished this using Python and rendering
                                    the web interface via Flask, a Python library. The data was organized and stored in a database
                                    using pymongo.</p>
                                <a>https://github.com/VladC12/IOT_Modbus_Monitor</a>
                            </li>
                            <li>
                                <h3>Edge Detection with GUI</h3>
                                <p>A project for year 4 semester 1 of the university for Digital Image Processing. We used Prewitt,
                                    Sobel, compass, Nevatia-Babu operators for edge detection with automated mask generation of
                                    any size. The GUI was made in the Python library Tkinter.</p>
                                <a>https://github.com/VladC12/Edge-Detection-PNI</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>06/2017</h3>
                        <h3>Baccalaureate Diploma, Colegiul National Silvania</h3>
                        <p>Mathematics and Informatics</p>
                    </li>
                </ul>
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ab earum laborum quibusdam porro ipsam impedit repudiandae deleniti sint iste natus soluta consequatur, cum numquam reiciendis perferendis iure autem magni illo esse enim animi neque. Totam exercitationem accusantium soluta cumque consequuntur quaerat velit ratione natus vitae quidem accusamus corporis, laboriosam quo hic expedita vel, ullam reprehenderit at laudantium nesciunt nisi aliquid cum dolores. Voluptates est quas et expedita accusamus, delectus ea harum atque illo, nobis natus commodi voluptatem eum ab, perferendis libero. Sed asperiores molestias animi doloremque harum sint. Praesentium quo ratione voluptatem assumenda corrupti, impedit id magnam voluptatum saepe non alias explicabo in soluta! Sit iure ex quia iste tempora ut incidunt at corrupti porro quidem quas optio, distinctio ipsam consectetur eaque eos libero doloribus inventore iusto voluptatum culpa aliquam earum tenetur. Minima debitis aut suscipit adipisci saepe? Optio, rem sit veniam, expedita ipsum distinctio culpa deserunt itaque minus a et excepturi sed accusantium dignissimos cupiditate, mollitia architecto tenetur ipsa id ad aut saepe amet omnis labore? Fuga laborum placeat consectetur ratione! Hic numquam deleniti iure cupiditate ad voluptates laboriosam magni aperiam dignissimos tempore! Laboriosam rem omnis distinctio dignissimos accusantium incidunt nemo, libero ab non, vitae, corrupti modi unde provident ea perferendis consequatur autem neque fugiat? Dolorum voluptatibus amet hic facere soluta ab delectus cumque dolorem aliquid id nostrum quam ex quisquam provident exercitationem dolor, accusantium nisi reiciendis pariatur incidunt libero. Voluptatem quasi placeat iure illo possimus fugiat similique quod nam dicta sed aliquid necessitatibus eaque, nesciunt deserunt perspiciatis hic laudantium ipsam sapiente maiores repellat eius! Consequatur nam necessitatibus consequuntur, sint molestiae eaque beatae animi accusamus praesentium nostrum architecto repellendus esse, tempore culpa suscipit similique vitae ipsam aliquam voluptates debitis. Quidem sunt numquam odit suscipit blanditiis dolore porro voluptatum perferendis? Id reprehenderit quidem sunt, animi maxime eligendi delectus ipsa dicta suscipit vero adipisci ex cumque voluptates aut magni dolores quisquam maiores accusantium laudantium quaerat minima autem quod ut iure. Incidunt eius suscipit maxime, nisi aliquam dicta assumenda repellendus aperiam ut eligendi dolore sunt iure, nostrum quasi amet iusto ullam voluptates eaque magnam molestias. Doloremque asperiores commodi hic, id quasi, quo accusamus vero molestias nulla quidem animi debitis ea iusto nesciunt maiores facere error nihil rerum fugiat aperiam? Reprehenderit, corporis aliquam voluptates, officia incidunt expedita recusandae velit blanditiis ullam facere nostrum repudiandae odit veritatis, quos ducimus necessitatibus ab placeat accusamus in. Esse incidunt aliquid consectetur beatae odit, earum fugiat dicta! Rerum nesciunt veritatis asperiores dolorem. Quibusdam velit ipsam dolorum accusantium maiores beatae dolores alias similique eligendi. Alias odit illo reprehenderit, id earum quia explicabo sapiente reiciendis amet eum voluptates similique unde voluptatibus, repellat asperiores pariatur labore quibusdam laudantium fugiat corrupti atque consectetur, ipsa inventore. Doloremque eveniet nesciunt laudantium laborum saepe quam aliquid cupiditate? Nam natus nemo consectetur at totam repudiandae illum necessitatibus recusandae repellendus, obcaecati a, aut iste eum officia molestias, sequi quidem. Ad placeat ipsam ratione itaque odio nisi maiores amet, numquam reprehenderit ipsa, delectus quaerat saepe, eaque voluptatibus quod sit perferendis veniam illum dolorum dignissimos? Architecto, ratione. Recusandae eum voluptates atque nihil doloremque laudantium dolores dignissimos, aperiam doloribus, facere, expedita earum deleniti rem reprehenderit veritatis! Modi, impedit ipsum quam rem ipsa ex, quasi fugit consequuntur tempora a voluptas aliquam nemo, quidem omnis porro accusamus quia est inventore tenetur ducimus sunt eum! Eius dolorem, asperiores amet at officiis fugiat officia, quis velit quibusdam repellat consequuntur alias facere provident laborum delectus dolore atque aliquam laboriosam earum veniam. Ipsum voluptates error ad natus obcaecati perspiciatis amet quos iure quod aut, ut, vel totam sed? Perferendis ad saepe tempore sit. Ullam, esse voluptatibus mollitia accusamus, quisquam dolor voluptatum, fugit dicta numquam obcaecati pariatur! Nostrum dolorem laudantium veritatis tempora illo non impedit in modi, temporibus mollitia praesentium ipsam dolor amet repellat iure saepe fugiat, quis sapiente laboriosam enim veniam quod aliquid ut. Harum animi dicta quas expedita dignissimos qui culpa, error sunt distinctio maiores a, tempore sint, vitae at aspernatur modi. Aliquam harum temporibus dolorum, facilis exercitationem sint sit eos quod! Id earum, facere quaerat quod blanditiis nam adipisci cum corrupti, amet voluptas consectetur harum aperiam. Accusamus alias tempora necessitatibus autem tenetur quas, vero inventore. Aliquam aspernatur saepe reprehenderit nemo, quisquam amet numquam blanditiis perferendis mollitia doloribus dicta cumque sequi est aliquid eos aperiam quidem corporis debitis obcaecati qui sapiente dolorem itaque nihil quos? Iure sit impedit iusto adipisci tempora tenetur vero porro ad mollitia maiores quibusdam facilis pariatur, totam quaerat minus dicta quasi dolorem doloribus dolorum at exercitationem perferendis est. Autem doloribus, error perspiciatis ea atque adipisci impedit voluptatem, explicabo exercitationem similique temporibus velit nisi harum commodi, animi quia placeat! Quas numquam vero qui facere fugit est enim, repellendus laborum molestias sint molestiae consequuntur, ratione minima suscipit? Mollitia accusantium odio molestias natus obcaecati omnis asperiores eum pariatur tempore? Facere, iure. Veniam cum dolores fuga quod aliquid iure magni omnis repudiandae? Earum, dignissimos? Cupiditate dicta esse quam facilis explicabo quis tenetur labore sit nemo itaque possimus necessitatibus veniam debitis harum quod, a nam deleniti consequuntur nobis, voluptatem perspiciatis dolore unde. Inventore accusantium maiores laboriosam a ex vitae. Sunt cum, omnis commodi doloremque architecto dolorem recusandae quis molestiae! Soluta illum rem voluptates, error ullam totam ut commodi repellendus laudantium nam harum mollitia animi dolor eligendi culpa. Ex ipsa, magni velit praesentium a vel quaerat. Molestias quos accusamus quibusdam corrupti, recusandae, veniam nobis odio explicabo minus illo hic natus provident laborum. Quis beatae praesentium, quod laborum culpa quas maxime, ipsam velit architecto accusantium dicta voluptate incidunt! Quaerat ullam necessitatibus unde blanditiis veritatis cum, incidunt natus culpa recusandae, tenetur repellat! Unde nostrum aspernatur, a delectus ducimus quae iusto minus eos assumenda sapiente atque sunt dignissimos perspiciatis aliquid debitis voluptatem. Natus ducimus est vitae nulla pariatur maxime nam debitis ab repellendus tenetur temporibus dolore animi placeat eaque accusantium nisi rem minus adipisci consequatur ullam, alias obcaecati architecto! Impedit, assumenda itaque ipsam ducimus distinctio aliquam cumque! Hic neque beatae recusandae consequatur vero incidunt a quia rem ratione quam, nostrum, accusamus, in blanditiis amet quos. Sint, non! Molestias, dolore incidunt reprehenderit vitae numquam deleniti aperiam nesciunt facilis sit exercitationem amet culpa architecto repellat minima natus, dolorum illo esse ipsam unde? Eum, iste mollitia. Officia, repellat vel? Nemo perferendis corporis dicta numquam odio, reiciendis officia? Debitis minus qui ad optio cumque dolores dolore excepturi adipisci atque tempore fugiat enim, libero pariatur dolorem culpa numquam iste nihil sequi modi voluptatibus quae accusantium possimus facilis rerum! Maiores saepe fugiat error repellendus corrupti soluta sequi magni repudiandae, suscipit exercitationem. Modi cum cumque earum corrupti sed ea repellendus assumenda explicabo a deserunt vero, asperiores aliquam voluptatem odit blanditiis nulla reiciendis beatae? Dolorum odit voluptatum voluptate nobis et deserunt molestiae tempora vero. Incidunt at praesentium, dignissimos quaerat vero harum eius. Quod expedita optio ullam magni a sapiente dolor praesentium distinctio dicta? Quaerat minima sequi cupiditate facere pariatur labore, laborum, animi consequuntur ipsam dolor ipsa maxime quia eum corporis libero. Neque soluta architecto impedit odit excepturi numquam exercitationem modi autem libero veniam temporibus voluptatem, iste adipisci tempora odio dolore aut tenetur suscipit fugit sequi quibusdam animi alias assumenda labore. Inventore sapiente, ea aperiam harum facilis quo nam, tenetur unde, odio est esse nesciunt placeat. Illo ipsum maxime iure molestiae voluptate vel reprehenderit aliquid ullam cumque eius, quia explicabo soluta alias sit excepturi doloremque neque suscipit, eum minus quas, omnis reiciendis delectus laboriosam. Deserunt, dicta velit? Earum, expedita repellat optio maxime voluptatem alias excepturi enim nihil quidem dolores eum sequi assumenda, vitae ea, natus harum! A amet vitae vero aut molestias magnam nemo. Necessitatibus iste doloribus ad aliquam fugit ex nam impedit iure in architecto? Quaerat esse dolorem voluptatibus delectus dolore deserunt itaque aspernatur reiciendis quo nostrum totam adipisci officia consequatur expedita quae minus pariatur, soluta, maiores repellat architecto. Tempora possimus facere exercitationem, sequi amet blanditiis eum ipsa aut corrupti earum. Vitae, deserunt excepturi reprehenderit tempore debitis, obcaecati dolorem amet nam autem odit maxime odio. Culpa dolorem aliquam dignissimos ipsam harum sunt fugit necessitatibus optio provident ab laboriosam, labore odio alias nostrum reiciendis magni quam, quibusdam porro rem doloremque. Reiciendis sequi ipsa quasi unde dolorum aliquid ea tempore, iure quo recusandae nesciunt cum minus fugiat sit dolore perferendis commodi atque dolor autem id culpa aspernatur velit aliquam eius. Similique dolorum dignissimos nemo ut accusantium eum accusamus expedita illum ipsa excepturi quaerat a, saepe omnis voluptatibus culpa itaque atque ipsum minima! Distinctio ea cupiditate temporibus quaerat modi dolore reprehenderit suscipit obcaecati expedita. Facilis sint aperiam quo, laboriosam atque illo explicabo adipisci architecto aspernatur ea voluptatibus vitae? Cumque, ipsam reiciendis! Esse voluptatum, commodi vero hic, quo corrupti, enim doloribus tempore magnam illum pariatur fugiat amet omnis. Ut suscipit sint numquam repellat eligendi, incidunt hic inventore debitis reiciendis at tempore? Modi facilis qui nulla natus placeat obcaecati rerum? Molestias accusantium reiciendis tenetur ex unde, cupiditate animi distinctio velit harum voluptates debitis quam pariatur at soluta nostrum! Assumenda officia odit, ut culpa dicta nemo accusantium, fuga provident eligendi libero officiis placeat neque ullam dolorem aspernatur blanditiis ad in dolore atque tenetur est nisi! Cum labore ullam dolor fugiat, eligendi nam doloremque eum fugit fuga mollitia, placeat, ducimus delectus voluptatem rerum laboriosam?
            </div>
        </div>
    );
};

export default CurriculumVitae;