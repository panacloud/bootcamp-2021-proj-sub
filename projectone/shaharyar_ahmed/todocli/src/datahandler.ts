import {JsonDB} from 'node-json-db'
import {Config} from 'node-json-db/dist/lib/JsonDBConfig'

/**
 * The DataHandler class deals with writing and reading the data file,
 * most of these operations are carried out by the JsonDB object
 *
 * @property db - JsonDB object we need to read and write to the database
 */

class DataHandler {
  static db: any;

  /**
   * sets the value of the static db property
   * @param {string} data_location - location of the json/data file (we get this through the config file)
   */

  static set_data_location(data_location: string) {
    DataHandler.db =  new JsonDB(new Config(data_location, true, true, '/'))
  }
}

export {DataHandler}
