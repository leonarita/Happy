import {createConnection} from 'typeorm'

createConnection()

// yarn typeorm migration:create -n create_orphanages
// yarn typeorm migration:create -n create_images

// yarn typeorm migration:run
// yarn typeorm migration:revert

