#!/bin/bash
# Set Finder label color
  if [ $# -lt 2 ]; then                                                       
    echo "USAGE: setlabel color file1 [file2] ..."
    echo "Sets the Finder label (color) for files"
    echo "Possible colors: None Orange Red Yellow Blue Purple Green Gray"
  else
  labelargs=$@
  color=$1
  file=$2
  colorarray=( None Orange Red Yellow Blue Purple Green Gray )
  colorvalue=8
  for i in {0..7}
     do
      if [ "${color}" == ${colorarray[${i}]} ]
      then
         colorvalue=${i}
      fi
     done
  if [ "${colorvalue}" == "8" ]
      then
         echo Color ${color} is not recognized.
     echo "Possible colors: None Orange Red Yellow Blue Purple Green Gray"
     else
    osascript - ${colorvalue} ${file} << EOF >/dev/null 2>&1
    on run argv
        set labelIndex to (item 1 of argv as number)
        repeat with i from 2 to (count of argv)
          tell application "Finder"
              set theFile to POSIX file (item i of argv) as alias
              set label index of theFile to labelIndex
          end tell
        end repeat
    end run
EOF
    fi
  fi