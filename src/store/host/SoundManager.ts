import answerReveal from '@assets/FaceoffClone/audio/effects/answer_reveal.mp3';
import gameEnd from '@assets/FaceoffClone/audio/effects/game_end.mp3';
import playerDisconnect from '@assets/FaceoffClone/audio/effects/player_disconnect.mp3';
import playerJoin from '@assets/FaceoffClone/audio/effects/player_join.mp3';
import playerLeave from '@assets/FaceoffClone/audio/effects/player_leave.mp3';
import playerReconnect from '@assets/FaceoffClone/audio/effects/player_reconnect.mp3';
import points from '@assets/FaceoffClone/audio/effects/points.mp3';
import promptReveal from '@assets/FaceoffClone/audio/effects/prompt_reveal.mp3';
import resultCorrect from '@assets/FaceoffClone/audio/effects/result_correct.mp3';
import resultIncorrect from '@assets/FaceoffClone/audio/effects/result_incorrect.mp3';
import submission from '@assets/FaceoffClone/audio/effects/submission.mp3';
import timerDone from '@assets/FaceoffClone/audio/effects/timer_done.mp3';
import timerDoneAlarm from '@assets/FaceoffClone/audio/effects/timer_done_alarm.mp3';
import timerStart from '@assets/FaceoffClone/audio/effects/timer_start.mp3';
import timerWarning from '@assets/FaceoffClone/audio/effects/timer_warning.mp3';
import timer from '@assets/FaceoffClone/audio/effects/timer.mp3';

enum OneShot {
    AnswerReveal = 'AnswerReveal',
    GameEnd = 'GameEnd',
    PlayerDisconnect = 'PlayerDisconnect',
    PlayerJoin = 'PlayerJoin',
    PlayerLeave = 'PlayerLeave',
    PlayerReconnect = 'PlayerReconnect',
    Points = 'Points',
    PromptReveal = 'PromptReveal',
    ResultCorrect = 'ResultCorrect',
    ResultIncorrect = 'ResultIncorrect',
    Submission = 'Submission',
    TimerDone = 'TimerDone',
    TimerDoneAlarm = 'TimerDoneAlarm',
    TimerStart = 'TimerStart',
    TimerWarning = 'TimerWarning',
}

enum Loop {
    Timer = 'Timer',
}

const oneShotClips: Record<OneShot, string> = {
    [OneShot.AnswerReveal]: answerReveal,
    [OneShot.GameEnd]: gameEnd,
    [OneShot.PlayerDisconnect]: playerDisconnect,
    [OneShot.PlayerJoin]: playerJoin,
    [OneShot.PlayerLeave]: playerLeave,
    [OneShot.PlayerReconnect]: playerReconnect,
    [OneShot.Points]: points,
    [OneShot.PromptReveal]: promptReveal,
    [OneShot.ResultCorrect]: resultCorrect,
    [OneShot.ResultIncorrect]: resultIncorrect,
    [OneShot.Submission]: submission,
    [OneShot.TimerDone]: timerDone,
    [OneShot.TimerDoneAlarm]: timerDoneAlarm,
    [OneShot.TimerStart]: timerStart,
    [OneShot.TimerWarning]: timerWarning,
};

const loopClips: Record<Loop, string> = {
    [Loop.Timer]: timer,
};

// Pre-load audio files.
for (const src of Object.values(oneShotClips)) {
    const audio = new Audio(src);
    audio.preload = 'auto';
}
for (const src of Object.values(loopClips)) {
    const audio = new Audio(src);
    audio.preload = 'auto';
}

abstract class SoundManager {
    static OneShot = OneShot;
    static Loop = Loop;

    static playOneShot(oneShot: OneShot): void {
        const audio = new Audio(oneShotClips[oneShot]);
        audio.play();
    }

    static playLoop(loop: Loop): () => void {
        const audio = new Audio(loopClips[loop]);
        audio.loop = true;
        audio.play();
        return () => {
            audio.pause();
        };
    }
}

export default SoundManager;
