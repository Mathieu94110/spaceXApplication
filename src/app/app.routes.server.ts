import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'launches/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'capsules/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'dragons/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  }
];
