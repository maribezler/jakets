"use strict";
var Path = require("path");
var Jake = require("./Jake");
var NodeUtil = require("./NodeUtil");
var RawExec = NodeUtil.CreateNodeExec("browserify", "browserify --help", "browserify/bin/cmd.js");
var Tsify = "tsify";
Tsify = NodeUtil.FindModulePath(Tsify) || Tsify;
var Collapser = "bundle-collapser/plugin.js";
Collapser = NodeUtil.FindModulePath(Collapser) || Collapser;
function Exec(inputs, output, callback, isRelease, tsargs, options, isSilent) {
    var args = inputs;
    if (tsargs !== null) {
        args += " -p [ " + Tsify + " --global " + (tsargs || "") + " ]";
    }
    if (isRelease) {
        args += "  -p [ " + Collapser + " ]";
    }
    else {
        args += " --debug";
    }
    args += " --outfile " + output;
    if (options) {
        args += " " + options;
    }
    Jake.Shell.mkdir("-p", Path.dirname(output));
    RawExec(args, callback, isSilent);
}
exports.Exec = Exec;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlcmlmeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJyb3dzZXJpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVksSUFBSSxXQUFNLE1BQU0sQ0FBQyxDQUFBO0FBQzdCLElBQVksSUFBSSxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBQy9CLElBQVksUUFBUSxXQUFNLFlBQVksQ0FBQyxDQUFBO0FBRXZDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQ25DLFlBQVksRUFDWixtQkFBbUIsRUFDbkIsdUJBQXVCLENBQ3hCLENBQUM7QUFFRixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUM7QUFDcEIsS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDO0FBRWhELElBQUksU0FBUyxHQUFHLDRCQUE0QixDQUFDO0FBQzdDLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsQ0FBQztBQUU1RCxjQUFxQixNQUFjLEVBQUUsTUFBYyxFQUFFLFFBQVEsRUFBRSxTQUFtQixFQUFFLE1BQWUsRUFBRSxPQUFnQixFQUFFLFFBQWtCO0lBQ3ZJLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUNsQixFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLElBQUksUUFBUSxHQUFHLEtBQUssR0FBRyxZQUFZLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ2xFLENBQUM7SUFDRCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxJQUFJLFNBQVMsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksSUFBSSxVQUFVLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDO0lBQy9CLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDWixJQUFJLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUU3QyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBbEJlLFlBQUksT0FrQm5CLENBQUEifQ==