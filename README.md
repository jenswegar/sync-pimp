# sync-pimp
Small UI to show which folders have NOT been paired with a remote replication target in a QNAP NAS rsync backup. 

The QNAP rsync backup / remote replication client has problems performing a backup if the source folder contains lots of files (10.000+). So in order to backup such a folder one needs to create multiple smaller jobs. 

The goal is to make a small docker image that can be installed and run on a QNAP to show which folders are still missing from a corresponding backup job. Hopefully with graphs and stuff as well :)

