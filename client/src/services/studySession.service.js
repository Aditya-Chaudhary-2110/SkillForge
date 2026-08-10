import {
  startStudySession,
  stopStudySession,
  getCurrentStudySession,
} from "../api/studySession.api";

export const startSession = async () => {
  return await startStudySession();
};

export const stopSession = async () => {
  return await stopStudySession();
};

export const getCurrentSession = async () => {
  return await getCurrentStudySession();
};
