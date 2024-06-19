using { db } from '../db/schema';

service TestService {

    entity TestProjected as projection on db.Test;
    
}