package edp.wormhole.sparkxinterface.batchjob.source

import edp.wormhole.common.ConnectionConfig
import org.apache.spark.sql.{DataFrame, SparkSession}

/*-
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

trait ObtainSourceDataInterface {
  def process(session: SparkSession, startTime: String, endTime: String, sourceNamespace: String,  connectionConfig: ConnectionConfig, specialConfig: Option[String]): DataFrame
}
