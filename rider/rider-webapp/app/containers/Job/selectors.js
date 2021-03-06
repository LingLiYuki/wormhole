/*
 * <<
 * wormhole
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

import { createSelector } from 'reselect'

const selectJob = () => (state) => state.get('job')

const selectJobs = () => createSelector(
  selectJob(),
  (jobState) => jobState.get('jobs')
)

const selectError = () => createSelector(
  selectJob(),
  (jobState) => jobState.get('error')
)

const selectJobSubmitLoading = () => createSelector(
  selectJob(),
  (jobState) => jobState.get('jobSubmitLoading')
)

const selectJobNameExited = () => createSelector(
  selectJob(),
  (jobState) => jobState.get('jobNameExited')
)

const selectJobSourceToSinkExited = () => createSelector(
  selectJob(),
  (jobState) => jobState.get('jobSourceToSinkExited')
)

export {
  selectJob,
  selectJobs,
  selectError,
  selectJobSubmitLoading,
  selectJobNameExited,
  selectJobSourceToSinkExited
}
