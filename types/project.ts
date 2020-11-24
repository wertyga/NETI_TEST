import { Breadcrumb } from '../components/Breadcrumbs/Breadcrumbs';

export enum projectConstants {
  FILL_LIST = 'FILL_LIST',
  SET_PROJECT = 'SET_PROJECT',
}

export interface Project {
  breadcrumbs?: Breadcrumb[],
  children?: Project[],
  date?: string,
  deleted_at?: string,
  feature?: string,
  hasDocument: boolean,
  id: number,
  is_favorite: boolean,
  notes_cnt_danger: number,
  notes_cnt_success: number,
  notes_cnt_warning: number,
  project_id: number,
  root_document_id: number,
  title: string,
  type: {
    name?: string,
    show: boolean
    title: string,
  },
}

export interface ProjectListItem {
  address: string,
  city?: string,
  date_deadline?: string,
  date_start?: string,
  deleted_at?: string,
  file?: string,
  id: number,
  is_favorite: boolean,
  note_template: string,
  notes_cnt_danger: number,
  notes_cnt_success: number,
  notes_cnt_warning: number,
  notification_time: string,
  root_structure_id: number,
  show_tasks: number,
  title: string,
  title_long?: string,
  title_short: string,
}

export interface Projects {
  list: ProjectListItem[],
}
