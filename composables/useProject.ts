import type { Project } from "~/types/IProject";

export const useProject = () => {
  const route = useRoute();
  const name = route.params.slug;

  const project = ref<Project>({} as Project);
  const photos = ref<string[]>([]);
  const isLoaded = ref(false);

  const { data, status } = useFetch<Project>(`https://api.los-bio.ru/projects/${name}`);

  watch(status, () => {
    if (status.value === 'success' && data.value) {
      project.value = data.value;
      photos.value = data.value.photos.map((it) => (`https://api.los-bio.ru/files/${it.catalog}/${it.name}`));
      isLoaded.value = true;
    }
  });

  return {
    project,
    photos,
    isLoaded,
  }
}
