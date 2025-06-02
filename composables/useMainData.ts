import type { Slide, SlideValue } from "~/types/ISlide";
import type { Advantage, AdvantageValue } from "~/types/IAdvantage";
import type { Project } from "~/types/IProject";
import type { IRaw } from "~/types/IRaw";

export const useMainData = () => {
  const slides = ref<Slide[]>([]);
  const advantages = ref<Advantage[]>([]);
  const projects = ref<Project[]>([]);
  const statusLoading = ref<number>(0);

  const { data: dataSlides, status: statusSlides } = useFetch<IRaw[]>(
    'https://api.los-bio.ru/info/group/slide'
  );
  const { data: dataAdvantages, status: statusAdvantages } = useFetch<IRaw[]>(
    'https://api.los-bio.ru/info/group/advantage'
  );
  const { data: dataProject, status: statusProject } = useFetch<Project[]>(
    'https://api.los-bio.ru/projects'
  );

  watch(statusSlides, () => {
    if (statusSlides.value === 'success' && dataSlides.value) {
      statusLoading.value += 1;
      slides.value = dataSlides.value.map((it) => ({
        id: it.id,
        name: it.name,
        value: JSON.parse(it.value) as SlideValue,
      }));
    }
  });

  watch(statusAdvantages, () => {
    if (statusAdvantages.value === 'success' && dataAdvantages.value) {
      statusLoading.value += 1;
      advantages.value = dataAdvantages.value.map((it) => ({
        id: it.id,
        name: it.name,
        value: JSON.parse(it.value) as AdvantageValue,
      }));
    }
  });

  watch(statusProject, () => {
    if (statusProject.value === 'success' && dataProject.value) {
      statusLoading.value += 1;
      projects.value = dataProject.value;
    }
  });

  return {
    slides,
    advantages,
    projects,
    statusLoading,
  }
}
