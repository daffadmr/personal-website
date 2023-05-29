import supabase from "@/utils/supabase";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects | Daffa Damar",
  description: "Some of the projects that Daffa Damar has worked on",
};

export const revalidate = 5;

export default async function Projects() {
  const { data } = await supabase.from("project").select();

  return (
    <main className="container flex">
      <div className="flex flex-col py-12 gap-5 w-full items-center">
        <h1>My Projects</h1>
        <div className="flex gap-12 flex-wrap justify-center">
          {data?.map(
            (
              { 
                id,
                image_url,
                title,
                description,
                tech,
                project_url,
                repository_url,
              }
            ) => {
              return (
                <ProjectCard
                  key={id}
                  image_url={image_url}
                  title={title}
                  description={description}
                  tech={tech}
                  project_url={project_url}
                  repository_url={repository_url}
                />
              );
            }
          )}
        </div>
      </div>
    </main>
  );
}
