beachLiveApp.controller('schedule_controller', function($scope, data, AngFirebase, $state){

	$scope.schedule = AngFirebase.getSchedule();

	
	AngFirebase.onScheduleChange(function(){
		$scope.schedule = AngFirebase.getSchedule();
		// console.log($scope.content);
		if(!$scope.$$phase) {
			$scope.$apply();
		}
	});
});